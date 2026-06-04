# React User App 👥

A modern React application that fetches and displays a list of users from the JSONPlaceholder API with a beautiful, responsive UI.

## Features

✨ **Fetch Users from API** - Uses axios to get user data from JSONPlaceholder  
✨ **React Hooks** - Implements useState and useEffect for state management and side effects  
✨ **Beautiful UI** - Modern gradient design with smooth animations  
✨ **Responsive Design** - Works perfectly on desktop, tablet, and mobile  
✨ **Interactive Cards** - Click on users to expand and see more details  
✨ **Error Handling** - Graceful error handling with user feedback  
✨ **Loading State** - Shows loading spinner while fetching data  

## Project Structure

```
react-user-app/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── App.css
│   ├── UserList.js
│   ├── UserList.css
│   ├── index.js
│   ├── index.css
├── package.json
├── README.md
└── .gitignore
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Extract the zip file** to your desired location

2. **Navigate to the project directory**
   ```bash
   cd react-user-app
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   - The app will automatically open at `http://localhost:3000`
   - If not, manually navigate to that URL

## How to Use

1. **View Users** - The app automatically fetches and displays all users from the JSONPlaceholder API
2. **Click on a Card** - Click any user card to expand and see more details
3. **View Details** - See company information, address, and geographic location
4. **Contact Info** - Click on email or website links to contact or visit

## API Information

This app uses the **JSONPlaceholder API**:
- **Endpoint**: `https://jsonplaceholder.typicode.com/users`
- **Type**: GET request
- **No Authentication**: Required
- **Data**: 10 sample users with full contact information

### User Data Includes:
- Name and Username
- Email and Phone
- Website and Company
- Full Address with Coordinates

## Technologies Used

- **React 18.2** - Frontend library
- **Axios 1.4** - HTTP client for API requests
- **React Hooks** - useState and useEffect
- **CSS3** - Modern styling with gradients and animations
- **Responsive Design** - Mobile-first approach

## Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm build`
Builds the app for production to the `build` folder

### `npm test`
Launches the test runner in interactive watch mode

## Code Breakdown

### UserList.js
```javascript
// Fetch users using axios in useEffect
useEffect(() => {
  const fetchUsers = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    setListOfUser(response.data);
  };
  fetchUsers();
}, []);

// Map over listOfUser state to display users
{listOfUser.map((user) => (
  <div key={user.id} className="user-card">
    {/* User card content */}
  </div>
))}
```

### Key Hooks Used

**useState** - Manages three states:
- `listOfUser` - Array of users from API
- `loading` - Loading state during fetch
- `error` - Error messages if fetch fails

**useEffect** - Runs once on component mount:
- Fetches users from API
- Sets loading/error states appropriately

## Features Explained

### Loading State
- Shows a spinner while fetching data
- Prevents displaying incomplete data

### Error Handling
- Catches API errors gracefully
- Shows user-friendly error messages
- Provides retry functionality

### Expandable Cards
- Click any user card to expand
- Shows company info, address, and location
- Click again to collapse

### Responsive Layout
- Desktop: 3-4 cards per row
- Tablet: 2-3 cards per row
- Mobile: 1 card per row
- Fully optimized for all screen sizes

## Styling

The app uses:
- **Linear Gradients** - Modern purple-to-blue gradient background
- **CSS Grid** - Responsive card layout
- **Flexbox** - Component internal layouts
- **Transitions** - Smooth animations
- **Media Queries** - Mobile responsiveness

## Customization Ideas

### Change API Endpoint
Modify the URL in `UserList.js` to fetch from a different API:
```javascript
const response = await axios.get('YOUR_API_ENDPOINT');
```

### Change Colors
Edit the gradient in `UserList.css`:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Add More User Fields
Update the card to display additional properties from the user object

### Sort Users
Add sorting functionality by name, email, or company

### Search Users
Add a search input to filter users in real-time

## Troubleshooting

### Blank Page?
- Check browser console for errors (F12)
- Ensure `npm install` was completed
- Try clearing browser cache

### API Not Loading?
- Check internet connection
- Verify JSONPlaceholder API is accessible
- Check browser console for CORS errors

### Styling Issues?
- Clear browser cache
- Make sure all CSS files are in the correct location
- Restart development server

### Module Not Found?
- Run `npm install` again
- Delete `node_modules` folder and `package-lock.json`, then run `npm install`

## Production Build

To create an optimized production build:

```bash
npm run build
```

This creates a `build` folder ready for deployment.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Lazy loading animations
- Optimized re-renders with hooks
- Efficient API caching
- Responsive images and assets

## Future Enhancements

- Add pagination for users
- Implement search/filter functionality
- Add sorting options
- Create detailed user profile page
- Add user posts/comments display
- Implement localStorage for favorites
- Add dark mode toggle

## License

Free to use and modify for personal and educational purposes.

## Support

For issues or questions:
1. Check the troubleshooting section
2. Review the browser console for errors
3. Check that all dependencies are installed correctly
4. Ensure Node.js and npm are up to date

---

Enjoy using the React User App! 🚀
