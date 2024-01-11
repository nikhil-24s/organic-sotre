import React, { useState } from 'react'

const Info = () => {
    const [info, setInfo] = useState([
        {
            icon: "ri-truck-fill",
            title: "free shipping",
            desc: "above $5 only"
        },
        {
            icon: "ri-contacts-book-line",
            title: "certified organic",
            desc: "100% gurantee"
        },
        {
            icon: "ri-money-dollar-box-fill",
            title: "hug saving",
            desc: "at lowest price"
        },
        {
            icon: "ri-recycle-fill",
            title: "easy return",
            desc: "no question asked"
        }
    ])
    return (
        <>
            <div className="info">
                {
                    info.map((item, i) => {
                        return <>
                            <div className="info-card" key={i}>
                                <div className="c-left">
                                    <i className={item.icon}></i>
                                </div>
                                <div className="c-right">
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        </>
                    })
                }
            </div>
        </>
    )
}

export default Info