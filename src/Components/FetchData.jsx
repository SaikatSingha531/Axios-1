// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const FetchData = () => {
//   const [data, setData] = useState(null); // State to store fetched data
//   const [loading, setLoading] = useState(true); // State to show loading
//   const [error, setError] = useState(null); // State to store errors, if any

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts") // Example API
//       .then((response) => {
//         setData(response.data); // Save data in the state
//         setLoading(false); // Stop loading
//       })
//       .catch((err) => {
//         setError(err); // Handle errors
//         setLoading(false); // Stop loading even if there's an error
//       });
//   }, []); // Empty array makes it run only once when the component mounts

//   return (
//     <div>
//       {loading && <p>Loading...</p>} {/* Show loading text */}
//       {error && <p>Error: {error.message}</p>} {/* Show error message */}
//       {data && (
//         <ul>
//           {data.map((item) => (
//             <li key={item.id}>{item.title}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default FetchData;
