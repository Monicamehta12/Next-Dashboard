import { customers } from "../../lib/placeholder-data"

export default function Page() {
    return (
        <div>
            <p className="mb-3 text-xl font-bold">List of Customers</p>
            <ul>
                {customers.map((customer) => (
                    <li key={customer.id} className="list-disc leading-10">
                        {customer.name} - {customer.email} 
                    </li>
                    
                ))}
            </ul>
        </div>
    );
}