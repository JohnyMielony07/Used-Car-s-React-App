import React, { Component} from 'react';

class Header extends Component {
    render () {
        return (
            <div>
                <p>
                    Best used cars in Europe!
                </p>
                <div>
                    <a href="/add-car">Add used car!</a>
                </div>
            </div>
        )
    }
}

export default Header;