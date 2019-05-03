import React, { Component} from 'react';

class Header extends Component {
    render () {
        console.log(window.location.pathname)
        let link = null;
        switch (window.location.pathname) {
            case '/':
                link = <a href="/add-car">Add used car!</a>
                break;
            case '/add-car':
                link = <a href="/">Back to list</a>
                break;
        }
        return (
            <div>
                <p>
                    Best used cars in Europe!
                </p>
                <div>
                    {link}
                </div>
            </div>
        )
    }
}

export default Header;