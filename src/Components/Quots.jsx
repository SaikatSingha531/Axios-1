// import React,{useState,useEffect} from 'react'

// function Quots() {

//     // State to store the quote
//   const [quote, setQuote] = useState(null);
//   const [loading, setLoading] = useState(true); // To handle loading state

//   // Fetch data when the component mounts
//   useEffect(() => {
//     const fetchQuote = async () => {
//       try {
//         const response = await fetch('https://zenquotes.io/api/random');
//         const data = await response.json();
        
//         // Assuming the API returns an array, we access the first quote
//         setQuote(data[0]);
//       } catch (error) {
//         console.error('Error fetching the quote:', error);
//       } finally {
//         setLoading(false); // Done loading
//       }
//     };

//     fetchQuote();
//   }, []); // Empty dependency array means this effect runs once when the component mounts

//   if (loading) {
//     return <div>Loading...</div>;
//   }


//   return (
//     <>
//        <div className="quote-container bg-gray-100 p-8 rounded-xl shadow-md max-w-md mx-auto">
//       <h2 className="text-xl font-semibold text-center">Random Quote</h2>
//       <p className="text-center text-lg mt-4">{quote?.q}</p>
//       <p className="text-center text-sm text-gray-500 mt-2">- {quote?.a}</p>
//     </div>
//     </>
//   )
// }

// export default Quots
