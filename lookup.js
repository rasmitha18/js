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

    
    const repoResponse = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await repoResponse.json();

    repos.sort((a, b) => b.stargazers_count - a.stargazers_count);

    const topRepos = repos.slice(0, 3);

    console.log("Top Repos:");
    topRepos.forEach((repo, index) => {
      console.log(`  ${index + 1}. ${repo.name} ( ${repo.stargazers_count})`);
    });

  } catch (error) {
    console.error("Error looking up user:", error.message);
  }
}

lookupUser("torvalds");