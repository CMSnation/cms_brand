import React, { useEffect, useState } from 'react';
import "./webconfig.scss";
import EditCard from '@/components/general/editCard/editcard';
import AdminNav from '@/components/admin/adminNav';

export default function WebConfig({ data }: any) {
    useEffect(() => {
        console.log(data);
    }, []);
    return (

        <div id='webconfig'>
            <AdminNav />
            {data.map((item: any, index: number) => {
                return (
                    <EditCard {...item} />
                )
            })}
        </div>
    );
}