interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Restaurant Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Restaurant Owner', 'Restaurant Manager'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant booking engine',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View restaurant information',
    'View menu items',
    'Create reservations',
    'Edit own user information',
  ],
  ownerAbilities: [
    'Manage the restaurant information',
    'Manage the restaurant menus',
    'Manage the restaurant reservations',
    'Manage the restaurant employees',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/b3d18e56-c749-4014-b7b6-6ee05bdfdd31',
};
