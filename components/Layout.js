import Navbar from './Navbar';
import Head from 'next/head'
import React, { Component } from 'react';

class Layout extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Bitz Price</title>  
                    <link rel="stylesheet" 
                    href="https://bootswatch.com/4/cerulean/bootstrap.min.css"/>                  
                </Head>
                <Navbar/>
                <div className="container">
                {this.props.children}
                </div>
                
            </div>
        );
    }
}

export default Layout;