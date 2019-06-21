import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="container float-left mt-5">
                <p className="float-right"><a href="#">Back to top</a></p>
                <p>&copy; 2019 SLIIT, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
            </footer>
        );
    }
}

export default Footer;