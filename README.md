# FarmMarket Pro

## Installation

1. Clone the repository:
```
git clone https://github.com/your-username/farmmarket-pro.git
```

2. Install the dependencies:
```
cd farmmarket-pro
npm install
```

3. Create a `.env` file in the root directory and add the following environment variables:
```
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

4. Start the development server:
```
npm run dev
```

## Usage

1. **Authentication**: Users can sign up and log in to the platform using email and password or Google authentication.

2. **Marketplace**: Farmers and buyers can browse and purchase seeds, grains, and fertilizers. The marketplace also includes a shopping cart and checkout functionality.

3. **Price Calculator**: Users can estimate crop/vegetable prices based on various factors such as weather, input costs, logistics, demand, and systemic conditions.

4. **Delivery Tracking**: Farmers can track the delivery status of their orders, while the platform also provides a community-level delivery tracker.

5. **Equipment**: Users can rent or lease certified agricultural equipment, with detailed information about the equipment and its certification.

## API

The application uses the Supabase API for authentication and data management. The API endpoints include:

- `/auth/signup`: Sign up a new user
- `/auth/login`: Log in an existing user
- `/profiles`: Manage user profiles
- `/products`: Retrieve and manage marketplace products
- `/orders`: Create and track user orders

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make your changes and commit them: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Submit a pull request

## License

This project is licensed under the [MIT License](LICENSE).

## Testing

To run the tests, use the following command:
```
npm test
```

The project includes unit tests for the authentication, marketplace, and delivery tracking functionalities.
