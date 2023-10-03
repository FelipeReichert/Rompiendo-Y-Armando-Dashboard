export default [
  {
    component: 'CNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil-speedometer',

  },
  {
    component: 'CNavTitle',
    name: 'Tools',
  },
  {
    component: 'CNavItem',
    name: 'Sales Gross',
    to: '/sales/SalesGross',
    icon: 'cil-cash',
  },
  {
    component: 'CNavItem',
    name: 'Clients',
    to: '/clients/Clients',
    icon: 'cil-user',
  },


  // {
  //   component: 'CNavItem',
  //   name: 'Download CoreUI',
  //   href: 'http://coreui.io/vue/',
  //   icon: { name: 'cil-cloud-download', class: 'text-white' },
  //   _class: 'bg-success text-white',
  //   target: '_blank'
  // },
  // {
  //   component: 'CNavItem',
  //   name: 'Try CoreUI PRO',
  //   href: 'http://coreui.io/pro/vue/',
  //   icon: { name: 'cil-layers', class: 'text-white' },
  //   _class: 'bg-danger text-white',
  //   target: '_blank'
  // }
]
