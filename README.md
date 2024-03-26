# my-door-management-app

Description:

This application serves as a comprehensive real estate door management system. It empowers property managers to efficiently view and manage the details of all doors utilized by a real estate company across various buildings. Key features include:

Door Listing: Provides a clear overview of all doors, including their unique IDs, names, connection types (wired/wireless), connection statuses (online/offline), and associated building details.
Door Details: Enables property managers to drill down into individual door entries, potentially featuring additional information like apartment IDs, access control configurations, and maintenance history (if implemented).

BFF (Backend For Frontend):

The application employs a Backend For Frontend (BFF) architecture. This design pattern offers several advantages:

API Abstraction: The BFF shields the frontend from the complexities and potential inconsistencies of the backend API. It provides a streamlined set of endpoints tailored to the frontend's specific needs.
Security Enhancement: By acting as an intermediary layer, the BFF can enforce stricter access control and data validation before forwarding requests to backend services.
Performance Optimization: The BFF can be optimized for performance by caching frequently accessed data and handling data transformations efficiently.

File Structure:

Libraries:

Next.js: A popular React framework for building server-rendered and statically generated web applications.
RTK Query: (Redux Toolkit Query) Streamlines API calls and data fetching in React applications with Redux integration.
Material-UI: A comprehensive library of pre-built React components that adhere to Material Design principles.
luxon: Simplifies working with dates and times in JavaScript.
