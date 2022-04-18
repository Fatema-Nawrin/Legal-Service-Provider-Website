import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <h1 className='text-center my-3 my-lg-5'>Question and Answers</h1>
            <h3>Differences between authorization and authentication</h3>
            <p className='me-2 me-lg-4 mb-2 mb-lg-4'>Authentication process mainly verifies and identify the user. On the other hand, authorization means determining if user has access to the specific routes. There is signup and login page in a website for user autentication. In authorization, access to certain private or protected pages is controlled. If user is not logged in and tries to check protected routes, user will be redirected to login page.</p>

            <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
            <p className='me-2 me-lg-4 mb-2 mb-lg-4'>
                Firebase provides different methods for authenticating users as most websites needs to know the identity of a user. These methods include authentication via email/password and social media login such as Google, Facebook, Twitter, Github etc. It lalso includes user managements system.
                There are many authntication ways other than firebase. Such as Auth0, Okta, OneLogin, PingIdentity, Amazon Cognito etc.
            </p>

            <h3>What other services does firebase provide other than authentication?</h3>
            <p className='me-2 me-lg-4'>
                Firebase is actually a complete package which is collection of different features. Other than authentication, Firebase provides service of hosting the sites, google analytics, storage and cloud messaging function, remote configuration. Some other features are realtime database, test lab, crash reporting and machine learning etc. All these features are very easy to use and helpful for web development.
            </p>
        </div>
    );
};

export default Blog;