export const roles = [
    {name:'Select Role', value:''},
    // {name:'driver', value:'driver'},
    {name:'company_owner', value:'company_owner'},
    // {name:'admin', value:'admin'},
    {name:'client', value:'client'}

   ]

export enum Role {
    ADMIN = 'admin',
    CLIENT = 'client',
    DRIVER = 'driver',
    OFFICER = 'officer',
    COMPANY_OWNER='company_owner',
    SYSTEM_ADMIN='system_admin'
  }