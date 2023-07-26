import React from 'react'

import './footer.scss';

function Footer() {
    const name = 'grymyk@gmail.com';
    const year = '2023';

    return (
        <div className="footer">
            <a href={`mailto:${name}`}
                aria-label="Send letter to developer">
                {name}
            </a>
            <span>{` ©${year}`}</span>
        </div>
    )
}

export default Footer;
