import React from 'react'

function Menu() {
    return (
        <React.Fragment>
            <nav>
                <div className="nav-brand">
                    <span className='brandName'><span className="Red">Dev</span>challenges.io</span>
                </div>
                <div className='nav-container'>
                    <ul>
                        <li>Color</li>
                        <li>Typo-graphy</li>
                        <li>Spaces</li>
                        <li>Button</li>
                        <li><a href="/" className='active'>Inputs</a></li>
                        <li>Grid</li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Menu
