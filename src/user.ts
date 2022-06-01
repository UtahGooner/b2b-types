import {BooleanLike} from "./generic";
import {BasicCustomer, CustomerKey} from "./customer";
import {JwtPayload} from "jwt-decode";


export interface LocalAuth {
    email: string,
    password: string,
}

export interface UserLocalToken extends JwtPayload {
    user?:UserProfile,
    accounts?: UserCustomerAccess[],
    roles?: UserRole[],
    picture?: string|null,
}

export interface UserGoogleToken extends JwtPayload {
    email?: string,
    name?: string,
    picture?: string,
}

export interface UserProfile {
    id: number;
    name: string;
    email: string;
    phone: string,
    company: string,
    address: string,
    city: string,
    state: string,
    zip: string,
    country: string,
    internal_only: BooleanLike,
    accountType: number,
    active: BooleanLike,
    notes: string|null,
    created: string|null,
    pwd_change_required: BooleanLike,
    waitingauth: BooleanLike,
    last_login: string|null,
    logins: number,
    hits: number,
    timestamp: string,
}

export interface UserRole {
    id: number,
    role: string,
}

export interface UserCustomerAccess {
    id: number,
    userid: number,
    Company: string,
    ARDivisionNo: string,
    CustomerNo: string,
    isRepAccount: BooleanLike,
    SalespersonDivisionNo: string,
    SalespersonNo: string,
    CustomerName: string|null,
    SalespersonName: string|null,
    primaryAccount: BooleanLike,
    customers: number,
    shipToCustomers: number,
}

export interface RecentCustomer extends BasicCustomer {
    ts: number,
}
