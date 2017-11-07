function fetchFromMyAPI(path) {
  return fetch(`http://localhost:3001/${path}`).then( res => res.json() );
}

function fetchGithubAPIWithPath(path) {
  return fetch(`https://api.github.com/${path}`).then( res => res.json() );
}

export function fetchFollowers(userName) {
  return (userName !== "pichaya") ? fetchGithubAPIWithPath(`users/${userName}/followers`) 
                                  : fetchFromMyAPI(`api/${userName}/followers`);
}