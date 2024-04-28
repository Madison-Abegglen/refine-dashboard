import { DashboardOutlined, ProjectOutlined, ShopOutlined } from "@ant-design/icons";
import { IResourceItem } from "@refinedev/core";

/**
 * Path definitions for refine to recognize available actions
 * Actions are paths used to perform crud operations on a specific resource
 * A resource in Refine performs these actions: 
 *  list -> get all records (Read)
 *  show -> get a single record (Read)
 *  create -> create a record (Create)
 *  edit -> update a record (Update)
 *  delete -> delete a record (Delete)
 *  clone  
*/

export const resources: IResourceItem[] = [
    {
        name: 'dashboard',
        list: '/',
        meta: {
            label: 'Dashboard',
            icon: <DashboardOutlined />
        }
    },
    {
        name: 'companies',
        list: '/companies',
        show: '/companies/:id',
        create: '/companies/new',
        edit: '/companies/edit/:id',
        meta: {
            label: 'Companies',
            icon: <ShopOutlined />
        }
    },
    {
        name: 'tasks',
        list: '/tasks',
        create: '/tasks/new',
        edit: '/tasks/edit/:id',
        meta: {
            label: 'Tasks',
            icon: <ProjectOutlined />
        }
    }
]