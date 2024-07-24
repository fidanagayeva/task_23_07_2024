// import React, { useState } from 'react';
// import './style/style.scss';

// function App() {
//   const [users, setUsers] = useState([
//     {
//       id: 42312,
//       name: 'Esthera Jackson',
//       function: 'Manager',
//       review: 'Positive',
//       email: 'esthera@simmmpkle.com',
//       employed: '2021-06-14',
//       profilePic: null,
//     },
//     {
//       id: 93201,
//       name: 'Alexa Liras',
//       function: 'Programmer',
//       review: 'Positive',
//       email: 'alexa@simmmpkle.com',
//       employed: '2021-06-14',
//       profilePic: null,
//     },
//     {
//       id: 84120,
//       name: 'Laurent Michael',
//       function: 'Executive',
//       review: 'Neutral',
//       email: 'laurent@simmmpkle.com',
//       employed: '2021-06-14',
//       profilePic: null,
//     },
//     {
//       id: 42314,
//       name: 'Freduardo Hill',
//       function: 'Manager',
//       review: 'Positive',
//       email: 'freduardo@simmmpkle.com',
//       employed: '2021-06-14',
//       profilePic: null,
//     },
//     {
//       id: 75642,
//       name: 'Daniel Thomas',
//       function: 'Programmer',
//       review: 'Negative',
//       email: 'daniel@simmmpkle.com',
//       employed: '2021-06-14',
//       profilePic: null,
//     },
//     {
//       id: 78583,
//       name: 'Mark Wilson',
//       function: 'Designer',
//       review: 'Positive',
//       email: 'mark@simmmpkle.com',
//       employed: '2021-06-14',
//       profilePic: null,
//     },
//   ]);

//   const [newUser, setNewUser] = useState({
//     id: '',
//     name: '',
//     function: '',
//     review: 'Positive',
//     email: '',
//     employed: '',
//     profilePic: null,
//   });

//   const handleProfilePicChange = (event, userId) => {
//     const file = event.target.files[0];
//     const updatedUsers = users.map(user =>
//       user.id === userId ? { ...user, profilePic: URL.createObjectURL(file) } : user
//     );
//     setUsers(updatedUsers);
//   };

//   const handleReviewChange = (event, userId) => {
//     const review = event.target.value;
//     const updatedUsers = users.map(user =>
//       user.id === userId ? { ...user, review } : user
//     );
//     setUsers(updatedUsers);
//   };

//   const handleNewUserChange = (event) => {
//     const { name, value } = event.target;
//     setNewUser({ ...newUser, [name]: value });
//   };

//   const handleNewUserProfilePicChange = (event) => {
//     const file = event.target.files[0];
//     setNewUser({ ...newUser, profilePic: URL.createObjectURL(file) });
//   };

//   const handleAddUser = (event) => {
//     event.preventDefault();
//     setUsers([...users, { ...newUser, id: Date.now() }]);
//     setNewUser({
//       id: '',
//       name: '',
//       function: '',
//       review: 'Positive',
//       email: '',
//       employed: '',
//       profilePic: null,
//     });
//   };

//   return (
//     <div className="App">
//       <div className="container mx-auto p-4">
//         <form onSubmit={handleAddUser} className="mb-4">
//           <div className="mb-2">
//             <label>Name:</label>
//             <input
//               type="text"
//               name="name"
//               value={newUser.name}
//               onChange={handleNewUserChange}
//               className="border border-gray-300 rounded px-2 py-1"
//               required
//             />
//           </div>
//           <div className="mb-2">
//             <label>Function:</label>
//             <input
//               type="text"
//               name="function"
//               value={newUser.function}
//               onChange={handleNewUserChange}
//               className="border border-gray-300 rounded px-2 py-1"
//               required
//             />
//           </div>
//           <div className="mb-2">
//             <label>Review:</label>
//             <select
//               name="review"
//               value={newUser.review}
//               onChange={handleNewUserChange}
//               className="border border-gray-300 rounded px-2 py-1"
//             >
//               <option value="Positive">Positive</option>
//               <option value="Neutral">Neutral</option>
//               <option value="Negative">Negative</option>
//             </select>
//           </div>
//           <div className="mb-2">
//             <label>Email:</label>
//             <input
//               type="email"
//               name="email"
//               value={newUser.email}
//               onChange={handleNewUserChange}
//               className="border border-gray-300 rounded px-2 py-1"
//               required
//             />
//           </div>
//           <div className="mb-2">
//             <label>Employed:</label>
//             <input
//               type="date"
//               name="employed"
//               value={newUser.employed}
//               onChange={handleNewUserChange}
//               className="border border-gray-300 rounded px-2 py-1"
//               required
//             />
//           </div>
//           <div className="mb-2">
//             <label>Profile Picture:</label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleNewUserProfilePicChange}
//               className="border border-gray-300 rounded px-2 py-1"
//             />
//           </div>
//           <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add User</button>
//         </form>
//         <table className="min-w-full bg-white">
//           <thead>
//             <tr>
//               <th className="py-2">Name</th>
//               <th className="py-2">Function</th>
//               <th className="py-2">Review</th>
//               <th className="py-2">Email</th>
//               <th className="py-2">Employed</th>
//               <th className="py-2">ID</th>
//               <th className="py-2">Profile Picture</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map(user => (
//               <tr key={user.id}>
//                 <td className="py-2 flex items-center">
//                   {user.profilePic ? (
//                     <img
//                       src={user.profilePic}
//                       alt="Profile"
//                       className="w-10 h-10 rounded-full mr-2"
//                     />
//                   ) : (
//                     <div className="w-10 h-10 rounded-full bg-gray-200 mr-2"></div>
//                   )}
//                   {user.name}
//                 </td>
//                 <td className="py-2">{user.function}</td>
//                 <td className="py-2">
//                   <select
//                     value={user.review}
//                     onChange={event => handleReviewChange(event, user.id)}
//                     className="border border-gray-300 rounded px-2 py-1"
//                   >
//                     <option value="Positive">Positive</option>
//                     <option value="Neutral">Neutral</option>
//                     <option value="Negative">Negative</option>
//                   </select>
//                 </td>
//                 <td className="py-2">{user.email}</td>
//                 <td className="py-2">{user.employed}</td>
//                 <td className="py-2">{user.id}</td>
//                 <td className="py-2">
//                   <input
//                     type="file"
//                     accept="image/*"
//                     onChange={event => handleProfilePicChange(event, user.id)}
//                   />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import './style/style.scss';

function App() {
  const [users, setUsers] = useState([]);

  const [newUser, setNewUser] = useState({
    id: '',
    name: '',
    function: '',
    review: 'Positive',
    email: '',
    employed: '',
    profilePic: null,
  });

  const handleNewUserChange = (event) => {
    const { name, value } = event.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleNewUserProfilePicChange = (event) => {
    const file = event.target.files[0];
    setNewUser({ ...newUser, profilePic: URL.createObjectURL(file) });
  };

  const handleAddUser = (event) => {
    event.preventDefault();
    setUsers([...users, { ...newUser, id: Date.now() }]);
    setNewUser({
      id: '',
      name: '',
      function: '',
      review: 'Positive',
      email: '',
      employed: '',
      profilePic: null,
    });
  };

  const handleDeleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <div className="App">
      <div className="container mx-auto p-4">
        <form onSubmit={handleAddUser} className="form-container mb-4">
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={newUser.name}
              onChange={handleNewUserChange}
              className="input"
              required
            />
          </div>
          <div className="form-group">
            <label>Function:</label>
            <input
              type="text"
              name="function"
              value={newUser.function}
              onChange={handleNewUserChange}
              className="input"
              required
            />
          </div>
          <div className="form-group">
            <label>Review:</label>
            <select
              name="review"
              value={newUser.review}
              onChange={handleNewUserChange}
              className="input"
            >
              <option value="Positive">Positive</option>
              <option value="Neutral">Neutral</option>
              <option value="Negative">Negative</option>
            </select>
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={newUser.email}
              onChange={handleNewUserChange}
              className="input"
              required
            />
          </div>
          <div className="form-group">
            <label>Employed:</label>
            <input
              type="date"
              name="employed"
              value={newUser.employed}
              onChange={handleNewUserChange}
              className="input"
              required
            />
          </div>
          <div className="form-group">
            <label>Profile Picture:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleNewUserProfilePicChange}
              className="input"
            />
          </div>
          <button type="submit" className="button">Add User</button>
        </form>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">Name</th>
              <th className="py-2">Function</th>
              <th className="py-2">Review</th>
              <th className="py-2">Email</th>
              <th className="py-2">Employed</th>
              <th className="py-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td className="py-2 image-name">
                  {user.profilePic ? (
                    <img
                      src={user.profilePic}
                      alt="Profile"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gray-200 mb-2"></div>
                  )}
                  {user.name}
                </td>
                <td className="py-2">{user.function}</td>
                <td className="py-2">{user.review}</td>
                <td className="py-2">{user.email}</td>
                <td className="py-2">{user.employed}</td>
                <td className="py-2">
                  <button
                    onClick={() => handleDeleteUser(user.id)}
                    className="button bg-red-500 hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;



// import React, { useState } from 'react';

// function App() {
//   const [users, setUsers] = useState([]);

//   const [newUser, setNewUser] = useState({
//     id: '',
//     name: '',
//     function: '',
//     review: 'Positive',
//     email: '',
//     employed: '',
//     profilePic: null,
//   });

//   const handleNewUserChange = (event) => {
//     const { name, value } = event.target;
//     setNewUser({ ...newUser, [name]: value });
//   };

//   const handleNewUserProfilePicChange = (event) => {
//     const file = event.target.files[0];
//     setNewUser({ ...newUser, profilePic: URL.createObjectURL(file) });
//   };

//   const handleAddUser = (event) => {
//     event.preventDefault();
//     setUsers([...users, { ...newUser, id: Date.now() }]);
//     setNewUser({
//       id: '',
//       name: '',
//       function: '',
//       review: 'Positive',
//       email: '',
//       employed: '',
//       profilePic: null,
//     });
//   };

//   return (
//     <div className="App bg-gray-100 min-h-screen flex items-center justify-center p-4">
//       <div className="container max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
//         <form onSubmit={handleAddUser} className="space-y-4">
//           <div className="flex flex-col space-y-2">
//             <label className="font-semibold">Name:</label>
//             <input
//               type="text"
//               name="name"
//               value={newUser.name}
//               onChange={handleNewUserChange}
//               className="border border-gray-300 rounded px-3 py-2"
//               required
//             />
//           </div>
//           <div className="flex flex-col space-y-2">
//             <label className="font-semibold">Function:</label>
//             <input
//               type="text"
//               name="function"
//               value={newUser.function}
//               onChange={handleNewUserChange}
//               className="border border-gray-300 rounded px-3 py-2"
//               required
//             />
//           </div>
//           <div className="flex flex-col space-y-2">
//             <label className="font-semibold">Review:</label>
//             <select
//               name="review"
//               value={newUser.review}
//               onChange={handleNewUserChange}
//               className="border border-gray-300 rounded px-3 py-2"
//             >
//               <option value="Positive">Positive</option>
//               <option value="Neutral">Neutral</option>
//               <option value="Negative">Negative</option>
//             </select>
//           </div>
//           <div className="flex flex-col space-y-2">
//             <label className="font-semibold">Email:</label>
//             <input
//               type="email"
//               name="email"
//               value={newUser.email}
//               onChange={handleNewUserChange}
//               className="border border-gray-300 rounded px-3 py-2"
//               required
//             />
//           </div>
//           <div className="flex flex-col space-y-2">
//             <label className="font-semibold">Employed:</label>
//             <input
//               type="date"
//               name="employed"
//               value={newUser.employed}
//               onChange={handleNewUserChange}
//               className="border border-gray-300 rounded px-3 py-2"
//               required
//             />
//           </div>
//           <div className="flex flex-col space-y-2">
//             <label className="font-semibold">Profile Picture:</label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleNewUserProfilePicChange}
//               className="border border-gray-300 rounded px-3 py-2"
//             />
//           </div>
//           <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add User</button>
//         </form>
//         <table className="min-w-full bg-white mt-6 border border-gray-200 rounded-md overflow-hidden">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="py-2 px-4 border-b border-gray-200">Name</th>
//               <th className="py-2 px-4 border-b border-gray-200">Function</th>
//               <th className="py-2 px-4 border-b border-gray-200">Review</th>
//               <th className="py-2 px-4 border-b border-gray-200">Email</th>
//               <th className="py-2 px-4 border-b border-gray-200">Employed</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map(user => (
//               <tr key={user.id} className="even:bg-gray-50">
//                 <td className="py-2 px-4 border-b border-gray-200 flex items-center space-x-3">
//                   {user.profilePic ? (
//                     <img
//                       src={user.profilePic}
//                       alt="Profile"
//                       className="w-10 h-10 rounded-full"
//                     />
//                   ) : (
//                     <div className="w-10 h-10 rounded-full bg-gray-200"></div>
//                   )}
//                   <span>{user.name}</span>
//                 </td>
//                 <td className="py-2 px-4 border-b border-gray-200">{user.function}</td>
//                 <td className="py-2 px-4 border-b border-gray-200">{user.review}</td>
//                 <td className="py-2 px-4 border-b border-gray-200">{user.email}</td>
//                 <td className="py-2 px-4 border-b border-gray-200">{user.employed}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default App;



// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LoginPage from './LoginPage';
// import UserPage from './UserPage';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LoginPage />} />
//         <Route path="/user" element={<UserPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
