/**
 * 
 * @param {Wrod wide convert} timestamp 
 * @returns 
 */

// export const convertTounitTime = (timestamp)=>{
//     // const timestamp = 1694812636699; // Replace this with your timestamp
// const date = new Date(timestamp);

// // Get individual date and time components
// const year = date.getFullYear();
// const month = date.getMonth() + 1; // Months are zero-based, so add 1
// const day = date.getDate();
// const hours = date.getHours();
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();

// // Create a human-readable date and time string
// const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

// return formattedDateTime
// } 




/**
 * 
 * @param {India time convert} timestamp 
 * @returns 
 */

export const convertToIndianTime = (timestamp) => {
    // const date = new Date(timestamp);
  
    // // Get individual date and time components
    // const year = date.getFullYear();
    // const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so add 1
    // const day = String(date.getDate()).padStart(2, '0');
    // const hours = String(date.getHours()).padStart(2, '0');
    // const minutes = String(date.getMinutes()).padStart(2, '0');
    // const seconds = String(date.getSeconds()).padStart(2, '0');
  
    // // Create a human-readable date and time string in DD/MM/YYYY HH:MM:SS format
    // const formattedDateTime = `${day}/${month}/${year} & ${hours}:${minutes}`;
  
    // return formattedDateTime;

    const date = new Date(timestamp);

  // Get individual date and time components
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so add 1
  const day = String(date.getDate()).padStart(2, '0');
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  // Determine AM or PM
  const ampm = hours >= 12 ? 'PM' : 'AM';
  
  // Convert to 12-hour format
  if (hours > 12) {
    hours -= 12;
  }
  hours = String(hours).padStart(2, '0');

  // Create a human-readable date and time string in DD/MM/YYYY hh:MM:SS AM/PM format
  const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes} ${ampm}`;

  return formattedDateTime;
  };
  


