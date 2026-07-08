const backend = [
  "Java",
  "Spring",
  "Kotlin",
  "Go",
  "PHP",
  "C#",
  "Python",
  "Node"
];

const frontend = [
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "React",
  "Vue",
  "Angular",
  "Svelte"
];

const mobile = [
  "Flutter",
  "Dart",
  "Swift",
  "Kotlin",
  "React Native"
];

const ai = [
  "Python",
  "Jupyter Notebook",
  "TensorFlow",
  "PyTorch",
  "Scikit"
];

const devops = [
  "Docker",
  "Shell",
  "Terraform",
  "Kubernetes",
  "YAML"
];

export function calculateDeveloperDNA(repositories) {

  const dna = {
    backend: 0,
    frontend: 0,
    mobile: 0,
    ai: 0,
    devops: 0
  };

  repositories.forEach((repo) => {

    const language = repo.language || "";

    if (backend.includes(language))
      dna.backend += 15;

    if (frontend.includes(language))
      dna.frontend += 15;

    if (mobile.includes(language))
      dna.mobile += 20;

    if (ai.includes(language))
      dna.ai += 20;

    if (devops.includes(language))
      dna.devops += 20;

    const text =
      `${repo.name} ${repo.description || ""}`.toLowerCase();

    if (text.includes("spring"))
      dna.backend += 25;

    if (text.includes("react"))
      dna.frontend += 25;

    if (text.includes("flutter"))
      dna.mobile += 25;

    if (
      text.includes("ai") ||
      text.includes("ml") ||
      text.includes("machine learning")
    )
      dna.ai += 25;

    if (
      text.includes("docker") ||
      text.includes("kubernetes")
    )
      dna.devops += 25;

  });

  Object.keys(dna).forEach((key) => {
    dna[key] = Math.min(100, dna[key]);
  });

  return dna;
}