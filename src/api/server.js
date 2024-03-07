export async function fetchData(url, options) {
  try {
      let response = await fetch(`http://localhost:8000${url}`, options);
      if (response.ok) {
          let data = await response.json();
          return data;
      } else {
          return null;
      }
  } catch (error) {
      console.log(error);
      throw new Error('Error in fetch'); 
  }
}