async function lookupUser(username) {
  try {
    const response = await fetch("https://api.github.com/users/" + username);
    if (!response.ok) {
      throw new Error("user not found");

    }
    const data = await response.json();

    console.log("Name:", data.name);
    console.log("Bio:", data.bio);
    console.log("Public Repos:", data.public_repos);
    console.log("Followers:", data.followers);
  } catch (error) {
    console.error(error.message);
  }
}

lookupUser("torvalds");
lookupUser("this-user-does-not-exist-xyz123");