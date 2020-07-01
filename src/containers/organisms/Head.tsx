import React from 'react';
import {Helmet} from 'react-helmet';

function Head(){
    return(
        <Helmet>
            <meta charSet="utf-8" />
            <title>My Title</title>
            <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
    );
}

export default Head;