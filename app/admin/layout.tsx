'use client'

import React, { ReactNode } from 'react';
import PageLayout from '../components/PageLayout';

const AdminLayout = ({ children }: { children: ReactNode }) => {

  return (
    <PageLayout>{children}</PageLayout>
  );
};

export default AdminLayout;