import React from 'react'

import {ResponsiveContainer , LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts'

const Chart = () => {
    const data = [
        {
            "name": "AGO/18",
            "bitcoin": 4000,
            "bitcoincash": 2400,
            "eos": 2000,
            "etherium": 1500,
            "litecoin": 1000,
            "tether": 4000,
            "xrp": 3000,
        },
        {
            "name": "SET/18",
            "bitcoin": 1000,
            "bitcoincash": 2000,
            "eos": 3000,
            "etherium": 4000,
            "litecoin": 5000,
            "tether": 6000,
            "xrp": 7000,
        },
        {
            "name": "OUT/18",
            "bitcoin": 5000,
            "bitcoincash": 1000,
            "eos": 1500,
            "etherium": 3000,
            "litecoin": 2000,
            "tether": 500,
            "xrp": 3000,
        },
        {
            "name": "NOV/18",
            "bitcoin": 4000,
            "bitcoincash": 2400,
            "eos": 2000,
            "etherium": 1500,
            "litecoin": 1000,
            "tether": 4000,
            "xrp": 3000,
        },
        {
            "name": "DEZ/18",
            "bitcoin": 5000,
            "bitcoincash": 1000,
            "eos": 1500,
            "etherium": 3000,
            "litecoin": 2000,
            "tether": 500,
            "xrp": 3000,
        },
        {
            "name": "JAN/19",
            "bitcoin": 4000,
            "bitcoincash": 2400,
            "eos": 2000,
            "etherium": 1500,
            "litecoin": 1000,
            "tether": 4000,
            "xrp": 3000,
        },
        {
            "name": "FEV/19",
            "bitcoin": 3000,
            "bitcoincash": 4000,
            "eos": 1000,
            "etherium": 3000,
            "litecoin": 200,
            "tether": 4000,
            "xrp": 3000,
        }
    ]

    return (
        <ResponsiveContainer width={'100%'} height={300} >
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="bitcoin" stroke="#8884d8" />
                <Line type="monotone" dataKey="bitcoincash" stroke="#82ca9F" />
                <Line type="monotone" dataKey="eos" stroke="#82ca" />
                <Line type="monotone" dataKey="etherium" stroke="#FaC" />
                <Line type="monotone" dataKey="litecoin" stroke="#ABC" />
                <Line type="monotone" dataKey="tether" stroke="#CE0" />
                <Line type="monotone" dataKey="xrp" stroke="#DA5" />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default Chart