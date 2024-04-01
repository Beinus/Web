import React, {useState, useEffect} from "react"
import './Home.css'

function Leftbar(props) {

    const categories = [
        {title: "Show Off", href: "./showOff"},
        {title: "Game", href: "./game"},
        {title: "Music", href: './music'},
        {title: "Travel", href: './travel'},
        {title: "Politics", href: './politics'}
    ]
    
    return (
        <>
            <div className={props.isLeftbarVisible ? "leftbar-active" : "leftbar"}>
                <nav className='category-list'>
                    <ul>
                        {categories.map(category => 
                            <li key={category.title}>
                                <a href={category.href}>{category.title}</a>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Leftbar