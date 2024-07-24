// import React, { useState, useEffect } from 'react';
// import './style/style.scss';

// function UserPage() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
//     setUsers(storedUsers);
//   }, []);

//   const handleDelete = (id) => {
//     const updatedUsers = users.filter(user => user.id !== id);
//     setUsers(updatedUsers);
//     localStorage.setItem('users', JSON.stringify(updatedUsers));
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <table className="min-w-full bg-white">
//         <thead>
//           <tr>
//             <th className="py-2">Name</th>
//             <th className="py-2">Function</th>
//             <th className="py-2">Review</th>
//             <th className="py-2">Email</th>
//             <th className="py-2">Employed</th>
//             <th className="py-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map(user => (
//             <tr key={user.id}>
//               <td className="py-2 image-name">
//                 {user.profilePic ? (
//                   <img
//                     src={user.profilePic}
//                     alt="Profile"
//                   />
//                 ) : (
//                   <div className="w-10 h-10 rounded-full bg-gray-200 mb-2"></div>
//                 )}
//                 {user.name}
//               </td>
//               <td className="py-2">{user.function}</td>
//               <td className="py-2">{user.review}</td>
//               <td className="py-2">{user.email}</td>
//               <td className="py-2">{user.employed}</td>
//               <td className="py-2">
//                 <button
//                   onClick={() => handleDelete(user.id)}
//                   className="button bg-red-500 hover:bg-red-700"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default UserPage;
