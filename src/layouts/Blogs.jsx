import React from 'react';
import { Helmet } from 'react-helmet';

const Blogs = () => {
    return (
        <div class="p-8">
             <Helmet>
                <title>Power Toys - Blogs</title>
            </Helmet>
    <div class="bg-white p-4 rounded-lg shadow-xl py-8 mt-12">
        <h4 class="text-4xl font-bold text-gray-800 tracking-widest uppercase text-center">FAQ</h4>
        <p class="text-center text-gray-600 text-sm mt-2">Here are some of the frequently asked questions</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-12 px-2 xl:px-12 mt-4">
            <div class="flex space-x-8 mt-8">
                 <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                        </svg>
                </div>
                <div>
                    <h4 class="text-xl font-bold text-gray-700">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h4>
                            <p class="text-gray-600 my-2">An access token is a credential that is used to access protected resources, such as APIs or services. It is typically a JSON Web Token (JWT) containing information about the user and their permissions. Access tokens have a limited lifespan and are used to authenticate and authorize API requests.</p>
                            <p class="text-gray-600 my-2">A refresh token is a long-lived credential that is used to obtain a new access token when the current access token expires. It is usually issued alongside the access token during the authentication process. Refresh tokens are securely stored on the client-side and are used to refresh the access token without requiring the user to re-authenticate.</p>
                            <p class="text-gray-600 my-2">However, the refresh token should be securely stored in a location that provides protection against unauthorized access, such as a secure HTTP-only cookie or a browser's local storage. Storing the refresh token in a cookie is a common practice to enhance security. It's important to note that the server-side implementation also plays a crucial role in handling and securing tokens. The server should have appropriate measures in place to validate and handle token requests, securely store tokens, and enforce token expiration policies.</p>
                </div>
            </div>
            
            <div class="flex space-x-8 mt-8">
                 <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                        </svg>
                </div>
                <div>
                    <h4 class="text-xl font-bold text-gray-700">Compare SQL and NoSQL databases?</h4>
                            <p class="text-gray-600 my-2">SQL databases are based on a rigid, predefined schema that defines the structure of the data and enforces strict data consistency. Data is organized in tables with rows and columns, and relationships between tables are established using foreign keys. </p>
                            <p class="text-gray-600 my-2">SQL databases use a standardized query language called SQL. It provides a structured and powerful way to manipulate and retrieve data from relational databases. SQL offers a wide range of operations, such as selecting, filtering, joining, and aggregating data.</p>
<br />

                            <p class="text-gray-600 my-2">NoSQL databases, on the other hand, have a flexible and dynamic schema. They can store unstructured or semi-structured data, such as JSON, key-value pairs, graphs, or documents. NoSQL databases are schema-less, allowing for more flexibility in data storage and retrieval.</p>

                            <p class="text-gray-600 my-2">NoSQL databases have different query languages specific to their data models. For example, key-value stores may use simple GET and PUT operations, while document databases may use query languages similar to JSON. The query capabilities of NoSQL databases are often focused on efficient retrieval and manipulation of data within their specific data models.</p>
                </div>
            </div>

            <div class="flex space-x-8 mt-8">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                        </svg>
                </div>
                <div>
                    <h4 class="text-xl font-bold text-gray-700">What is express js? What is Nest JS</h4>
                    <p class="text-gray-600 my-2">Key features of Express.js include: <br />

    Routing: Express.js allows you to define routes for different HTTP methods (GET, POST, PUT, DELETE, etc.) and handle requests for specific endpoints.
<br />
    Middleware: Express.js supports middleware functions that can be used to modify incoming requests or outgoing responses. Middleware functions can perform tasks such as authentication, logging, parsing request bodies, error handling, and more.
<br />
    Templating Engines: Express.js integrates with various templating engines (such as EJS, Pug, Handlebars) to dynamically generate HTML markup for server-side rendering.
<br />
    Error Handling: Express.js provides mechanisms for handling errors that occur during request processing, allowing you to define custom error handling middleware.
<br />
                            </p>
                            
                            <p class="text-gray-600 my-2">
                                Nest.js, on the other hand, is a progressive Node.js framework for building scalable and efficient server-side applications. It combines elements of object-oriented programming, functional programming, and functional reactive programming to provide a modular and structured approach to building server-side applications.
                            </p>
                </div>
            </div>

            <div class="flex space-x-8 mt-8">
               <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                        </svg>
                </div>
                <div>
                    <h4 class="text-xl font-bold text-gray-700">What is MongoDB aggregate and how does it work</h4>
                    <p class="text-gray-600 my-2">In MongoDB, the aggregate operation is used to perform advanced data processing and aggregation tasks on the data stored in a collection. It allows you to perform complex computations, transformations, and analysis on your data, similar to the SQL GROUP BY and aggregate functions.
                                The aggregate operation works by combining multiple stages into a pipeline. Each stage in the pipeline represents a different operation that is applied sequentially to the documents in the collection. The output of one stage becomes the input for the next stage in the pipeline.</p>
                            <p class="text-gray-600 my-2">The aggregate operation works by combining multiple stages into a pipeline. Each stage in the pipeline represents a different operation that is applied sequentially to the documents in the collection. The output of one stage becomes the input for the next stage in the pipeline.</p>
                </div>
            </div>
        </div>
    </div>
</div>
    );
};

export default Blogs;