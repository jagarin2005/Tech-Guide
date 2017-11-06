function fetchGithubAPIWithPath(path) {
  return fetch(`https://api.github.com/${path}`).then( res => res.json() );
}

export function fetchFollowers(userName) {
  return fetchGithubAPIWithPath(`users/${userName}/followers`);
}