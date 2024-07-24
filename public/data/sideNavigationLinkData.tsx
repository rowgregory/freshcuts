import { faChartColumn, faIdCard } from '@fortawesome/free-solid-svg-icons';

const sideNavigationLinkData = (params: any, isAdmin: boolean | null) => {
  const links = [
    {
      linkKey: '/admin/invoices',
      textKey: 'Invoices',
      icon: faIdCard,
      isActive: ["invoice", "invoices"].some(path => params?.includes(path)),
    },
  ];

  if (isAdmin) {
    links.unshift({
      linkKey: '/admin/dashboard',
      textKey: 'Dashboard',
      icon: faChartColumn,
      isActive: params === 'dashboard',
    });
  }

  return links;
};

export default sideNavigationLinkData;
