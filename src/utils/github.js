// Utility to fetch public repos from GitHub
export async function fetchGithubRepos(username) {
  const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`);
  if (!res.ok) throw new Error('Failed to fetch repos');
  return await res.json();
}
