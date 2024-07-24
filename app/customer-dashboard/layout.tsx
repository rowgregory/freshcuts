'use client'

import React, { ReactNode } from 'react'
import PageLayout from '../components/PageLayout';

const CustomerDashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <PageLayout>{children}</PageLayout>
  )
}

export default CustomerDashboardLayout