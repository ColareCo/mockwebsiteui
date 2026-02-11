"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const ENGINEER_TYPES = [
  { id: "mechanical", label: "Mechanical Engineer", icon: "⚙" },
  { id: "electrical", label: "Electrical Engineer", icon: "⚡" },
] as const;

const INDUSTRIES = [
  "Automotive",
  "Aerospace & Defense",
  "Consumer Electronics",
  "Industrial / Manufacturing",
  "Medical Devices",
  "Energy & Utilities",
  "Semiconductors",
  "Other",
] as const;

const MECHANICAL_SKILLS = [
  "CAD / SolidWorks",
  "GD&T",
  "DFM / DFA",
  "FEA / Simulation",
  "Tolerance Analysis",
  "Materials Selection",
  "Thermal Management",
  "Prototyping",
  "Manufacturing Processes",
  "Root Cause Analysis",
];

const ELECTRICAL_SKILLS = [
  "Schematic Capture",
  "PCB Design",
  "Power Electronics",
  "EMI/EMC",
  "Signal Integrity",
  "Embedded Systems",
  "Debugging",
  "Component Selection",
  "Test & Validation",
  "Documentation",
];

export default function CreateTestV0() {
  const router = useRouter();
  const [engineerType, setEngineerType] = React.useState<
    "mechanical" | "electrical" | null
  >(null);
  const [industry, setIndustry] = React.useState<string>("");
  const [lookingFor, setLookingFor] = React.useState<string[]>([]);
  const [additionalNotes, setAdditionalNotes] = React.useState("");

  const availableSkills =
    engineerType === "mechanical"
      ? MECHANICAL_SKILLS
      : engineerType === "electrical"
        ? ELECTRICAL_SKILLS
        : [];

  const toggleLookingFor = (skill: string) => {
    setLookingFor((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill],
    );
  };

  const canCreate =
    engineerType && industry && lookingFor.length > 0;

  const handleCreateTest = () => {
    if (!canCreate) return;
    const roleId =
      engineerType === "mechanical"
        ? "mechanical-design-engineer"
        : "electrical-design-engineer";
    router.push(`/tests/${roleId}`);
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <div className="mx-auto max-w-2xl px-6 py-6">
        <header className="mb-6 flex items-center gap-3">
          <Link
            href="/"
            aria-label="Back"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 shadow-sm hover:bg-zinc-50"
          >
            <span className="text-lg leading-none">×</span>
          </Link>
          <div className="font-fustat text-lg font-semibold text-graphite">
            Create Test <span className="ml-2 text-xs font-normal text-zinc-400">v0</span>
          </div>
          <div className="ml-auto" />
        </header>

        <div className="space-y-6">
          <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-sm font-semibold text-zinc-800">
              What type of engineer are you hiring for?
            </h2>
            <div className="mt-3 flex gap-4">
              {ENGINEER_TYPES.map((opt) => {
                const selected = engineerType === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => {
                      setEngineerType(opt.id);
                      setLookingFor([]);
                    }}
                    className={[
                      "flex flex-1 flex-col items-center gap-2 rounded-xl border p-5 transition",
                      selected
                        ? "border-violet bg-softLavender/80 shadow-[0_0_0_3px_rgba(89,76,233,0.15)]"
                        : "border-zinc-200 bg-white hover:bg-zinc-50",
                    ].join(" ")}
                  >
                    <span className="text-2xl">{opt.icon}</span>
                    <span className="text-sm font-semibold text-zinc-900">
                      {opt.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>

          <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-sm font-semibold text-zinc-800">
              Which industry?
            </h2>
            <div className="mt-3">
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="h-11 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 outline-none focus:border-zinc-300 focus:shadow-[0_0_0_3px_rgba(0,0,0,0.04)]"
              >
                <option value="">Choose an industry</option>
                {INDUSTRIES.map((ind) => (
                  <option key={ind} value={ind}>
                    {ind}
                  </option>
                ))}
              </select>
            </div>
          </section>

          <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-sm font-semibold text-zinc-800">
              What are you looking for?
            </h2>
            <p className="mt-1 text-xs text-zinc-500">
              Select the skills or areas you want to assess (at least one).
            </p>
            {engineerType ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {availableSkills.map((skill) => {
                  const selected = lookingFor.includes(skill);
                  return (
                    <button
                      key={skill}
                      type="button"
                      onClick={() => toggleLookingFor(skill)}
                      className={[
                        "rounded-full px-4 py-2 text-sm font-medium transition",
                        selected
                          ? "bg-corePurple text-white"
                          : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200",
                      ].join(" ")}
                    >
                      {skill}
                    </button>
                  );
                })}
              </div>
            ) : (
              <p className="mt-3 text-sm text-zinc-500 italic">
                Select an engineer type above first.
              </p>
            )}
            <div className="mt-4">
              <label className="block text-xs font-medium text-zinc-600 mb-2">
                Additional requirements (optional)
              </label>
              <textarea
                value={additionalNotes}
                onChange={(e) => setAdditionalNotes(e.target.value)}
                placeholder="E.g. experience with specific tools, certifications..."
                rows={2}
                className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-zinc-300 focus:shadow-[0_0_0_3px_rgba(0,0,0,0.04)]"
              />
            </div>
          </section>

          <div className="flex justify-end">
            <button
              type="button"
              disabled={!canCreate}
              onClick={handleCreateTest}
              className={[
                "inline-flex h-10 items-center justify-center rounded-xl px-6 text-sm font-semibold transition",
                canCreate
                  ? "bg-corePurple text-white shadow-sm hover:bg-violet"
                  : "bg-zinc-200 text-zinc-500 cursor-not-allowed",
              ].join(" ")}
            >
              Create Test
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
