import { useRouter } from 'next/router';
import React from 'react'
import user from "../../../data/user.json"
import Dashboard from '@/components/template/dashboard';

const Dynamic = () => {
    const { query } = useRouter();
    console.log(query.user?.at(2))
    const filter = user.filter((items) => items.count == query.user?.at(1))
    console.log(filter)
    return (
        <Dashboard>
            {filter.map((item, index) => (
                <div key={index}>
                    <h2>{item.name}</h2>
                    <p>{item.count}</p>
                </div>
            ))}
        </Dashboard>
  )
}

export default Dynamic