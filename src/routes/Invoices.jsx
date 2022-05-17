import React from 'react'
import { Link, NavLink, Outlet, useSearchParams, useLocation } from 'react-router-dom';
import { getInvoices } from '../constants/data'

export const Invoices = () => {

    let invoices = getInvoices();
    let [searchParams, setSearchParams] = useSearchParams();

    const handleSeach = (event) => {
        let filter = event.target.value;
        if(filter) {
            setSearchParams({filter});
        } else {
            setSearchParams({});
        }
    }

    
   function QueryNavLink({to, ...props}) {
    let location = useLocation();
    return <NavLink to={to + location.search} {...props} />
  }

    return (

        <div style={{ display: 'flex' }}>
            <nav style={{
                borderRight: "solid 1px",
                padding: '1rem',
            }}>
                <input 
                    value={searchParams.get('filter') || ""}
                    onChange={handleSeach}
                    />
                {invoices
                .filter((invoice) => {
                    let filter = searchParams.get("filter");
                    if (!filter) return true;
                    let name = invoice.name.toLowerCase();
                    return name.startsWith(filter.toLowerCase());
                })
                .map((invoice) => (
                    <QueryNavLink
                        style={({ isActive }) => {
                            return {
                                display: "block",
                                margin: "1rem 0",
                                color: isActive ? "red" : "",
                            };
                        }}
                        to={`/blog-website/invoices/${invoice.number}`}
                        key={invoice.number}
                    >
                        {invoice.name}
                    </QueryNavLink>
                ))}
            </nav>
            <Outlet />
        </div>
    )
}
