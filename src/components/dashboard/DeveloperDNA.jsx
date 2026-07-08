import { motion } from "framer-motion";
import { calculateDeveloperDNA } from "../../utils/developerDNA";

function Progress({ title, value, color }) {
  return (
    <div className="mb-6">

      <div className="flex justify-between mb-2">

        <span className="font-semibold">
          {title}
        </span>

        <span>{value}%</span>

      </div>

      <div className="w-full h-4 bg-slate-800 rounded-full overflow-hidden">

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1 }}
          className={`h-full ${color}`}
        />

      </div>

    </div>
  );
}

function DeveloperDNA({ repositories }) {

  const dna = calculateDeveloperDNA(repositories);

  return (
    <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8">

      <h2 className="text-3xl font-bold mb-8">
        🧬 Developer DNA
      </h2>

      <Progress
        title="Backend Development"
        value={dna.backend}
        color="bg-blue-500"
      />

      <Progress
        title="Frontend Development"
        value={dna.frontend}
        color="bg-green-500"
      />

      <Progress
        title="Artificial Intelligence"
        value={dna.ai}
        color="bg-purple-500"
      />

      <Progress
        title="Mobile Development"
        value={dna.mobile}
        color="bg-pink-500"
      />

      <Progress
        title="DevOps"
        value={dna.devops}
        color="bg-orange-500"
      />

    </div>
  );
}

export default DeveloperDNA;