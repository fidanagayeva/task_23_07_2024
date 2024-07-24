// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './style/style.scss';

// function LoginPage() {
//   const [newUser, setNewUser] = useState({
//     name: '',
//     function: '',
//     review: 'Positive',
//     email: '',
//     employed: '',
//     profilePic: null,
//   });

//   const navigate = useNavigate();

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
//     // Save user data to localStorage or some other state management
//     const users = JSON.parse(localStorage.getItem('users')) || [];
//     users.push({ ...newUser, id: Date.now() });
//     localStorage.setItem('users', JSON.stringify(users));
//     navigate('/user');
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <form onSubmit={handleAddUser} className="form-container mb-4">
//         <div className="form-group">
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={newUser.name}
//             onChange={handleNewUserChange}
//             className="input"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Function:</label>
//           <input
//             type="text"
//             name="function"
//             value={newUser.function}
//             onChange={handleNewUserChange}
//             className="input"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Review:</label>
//           <select
//             name="review"
//             value={newUser.review}
//             onChange={handleNewUserChange}
//             className="input"
//           >
//             <option value="Positive">Positive</option>
//             <option value="Neutral">Neutral</option>
//             <option value="Negative">Negative</option>
//           </select>
//         </div>
//         <div className="form-group">
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={newUser.email}
//             onChange={handleNewUserChange}
//             className="input"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Employed:</label>
//           <input
//             type="date"
//             name="employed"
//             value={newUser.employed}
//             onChange={handleNewUserChange}
//             className="input"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Profile Picture:</label>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleNewUserProfilePicChange}
//             className="input"
//           />
//         </div>
//         <button type="submit" className="button">Add User</button>
//       </form>
//     </div>
//   );
// }

// export default LoginPage;
