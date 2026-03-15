'use client';

import { useTimeout } from 'ahooks';
import { useRouter } from 'next/navigation';
import { memo } from 'react';

import { useGlobalStore } from '@/store/global';

const DISABLE_AUTO_OPEN_CHANGELOG = true;

const ChangelogModal = memo<{ currentId?: string }>(({ currentId }) => {
  const [latestChangelogId, updateSystemStatus] = useGlobalStore((s) => [
    s.status.latestChangelogId,
    s.updateSystemStatus,
  ]);
  const router = useRouter();

  useTimeout(() => {
    if (!currentId) return;

    if (DISABLE_AUTO_OPEN_CHANGELOG) {
      if (currentId === latestChangelogId) return;
      updateSystemStatus({ latestChangelogId: currentId });

      return;
    }

    if (!latestChangelogId) {
      updateSystemStatus({ latestChangelogId: currentId });
    } else if (latestChangelogId !== currentId) {
      router.push('/changelog/modal');
    }
  }, 1000);

  return null;
});

export default ChangelogModal;
