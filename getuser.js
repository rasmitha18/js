async function getUser(id) {
  try {
    let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    let data = await response.json();
    console.log("Name:", data.name);
    console.log("Email:", data.email);
  } catch (error) {
    console.log("Error fetching user:", error);
  }
}