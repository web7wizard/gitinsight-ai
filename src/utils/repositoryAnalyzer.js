export function analyzeRepository(repo) {
  let score = 0;
  const strengths = [];
  const improvements = [];

  // Description
  if (repo.description) {
    score += 10;
    strengths.push("Description");
  } else {
    improvements.push("Add a repository description");
  }

  // License
  if (repo.license) {
    score += 15;
    strengths.push("License");
  } else {
    improvements.push("Add an open-source license");
  }

  // Homepage
  if (repo.homepage) {
    score += 10;
    strengths.push("Homepage");
  } else {
    improvements.push("Add a live demo / homepage");
  }

  // Topics
  if (repo.topics && repo.topics.length > 0) {
    score += 10;
    strengths.push("Topics");
  } else {
    improvements.push("Add GitHub topics");
  }

  // Stars
  if (repo.stargazers_count >= 50) {
    score += 20;
    strengths.push("Popular");
  } else if (repo.stargazers_count >= 10) {
    score += 10;
  }

  // Forks
  if (repo.forks_count >= 20) {
    score += 10;
    strengths.push("Forked");
  }

  // Activity
  const updated = new Date(repo.updated_at);
  const today = new Date();
  const days = (today - updated) / (1000 * 60 * 60 * 24);

  if (days <= 30) {
    score += 20;
    strengths.push("Recently Updated");
  } else {
    improvements.push("Repository looks inactive");
  }

  score = Math.min(score, 100);

  let grade = "D";

  if (score >= 90) grade = "A+";
  else if (score >= 80) grade = "A";
  else if (score >= 70) grade = "B";
  else if (score >= 60) grade = "C";

  return {
    score,
    grade,
    strengths,
    improvements,
  };
}