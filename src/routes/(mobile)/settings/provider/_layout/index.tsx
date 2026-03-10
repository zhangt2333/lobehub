'use client';

import { Navigate, Outlet, useNavigate, useParams } from 'react-router-dom';

import { featureFlagsSelectors, useServerConfigStore } from '@/store/serverConfig';

import ProviderMenu from '../../../../(main)/settings/provider/ProviderMenu';

const Layout = () => {
  const { showProvider } = useServerConfigStore(featureFlagsSelectors);
  const params = useParams<{ providerId: string }>();
  const navigate = useNavigate();

  if (!showProvider) return <Navigate replace to="/settings" />;

  const handleProviderSelect = (providerKey: string) => {
    navigate(`/settings/provider/${providerKey}`);
  };

  return params.providerId === 'all' ? (
    <ProviderMenu mobile={true} onProviderSelect={handleProviderSelect} />
  ) : (
    <Outlet />
  );
};

export default Layout;
