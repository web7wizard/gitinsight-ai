import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com/users",
});

export const getUserProfile = async (username) => {
  const { data } = await api.get(`/${username}`);
  return data;
};

export const getUserRepositories = async (username) => {
  const { data } = await api.get(
    `/${username}/repos?per_page=100&sort=updated`
  );
  return data;
};

export const getRepositoryTopics = async (
  owner,
  repository
) => {
  const { data } = await axios.get(
    `https://api.github.com/repos/${owner}/${repository}`,
    {
      headers: {
        Accept: "application/vnd.github+json",
      },
    }
  );

  return data;
};