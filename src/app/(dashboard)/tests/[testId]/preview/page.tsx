"use client";

import * as React from "react";
import Link from "next/link";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { ROLES } from "@/lib/roles";

type Question = {
  id: string;
  title: string;
  skill: string;
  type: string;
  timeMinutes: number;
  description: string;
  options?: string[];
};

type SectionState = {
  id: string;
  title: string;
  minutes: number;
  questions: Question[];
};

function IconChevronRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.5 4.5 13 10l-5.5 5.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconPlay(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M8 5v14l11-7L8 5z" />
    </svg>
  );
}

function IconInfo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M10 9v4M10 7h.01"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function PreviewPage() {
  const params = useParams<{ testId: string }>();
  const searchParams = useSearchParams();
  const testId = params?.testId ?? "";
  const questionId = searchParams?.get("question") ?? null;
  const router = useRouter();

  const role = React.useMemo(
    () => ROLES.find((r) => r.id === testId) ?? ROLES[0],
    [testId],
  );

  const [question, setQuestion] = React.useState<Question | null>(null);
  const [answer, setAnswer] = React.useState("");
  const [selectedOption, setSelectedOption] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!testId || !questionId) {
      setQuestion(null);
      return;
    }
    try {
      const raw = window.localStorage.getItem(`test-sections:${testId}`);
      if (!raw) {
        setQuestion(null);
        return;
      }
      const sections: SectionState[] = JSON.parse(raw);
      for (const s of sections) {
        const q = s.questions.find((x) => x.id === questionId);
        if (q) {
          setQuestion(q);
          return;
        }
      }
      setQuestion(null);
    } catch {
      setQuestion(null);
    }
  }, [testId, questionId]);

  const isMultipleChoice = question?.type === "Multiple Choice";

  const { sections, totalQuestions, firstQuestionId } = React.useMemo(() => {
    if (typeof window === "undefined") {
      const previewSections = role?.preview.sections ?? [];
      return {
        sections: previewSections.map((s, i) => ({ id: `section-${i}`, title: s.title, minutes: 0, questions: [] as Question[] })),
        totalQuestions: previewSections.length,
        firstQuestionId: previewSections.length > 0 ? "seed-0" : null,
      };
    }
    try {
      const raw = window.localStorage.getItem(`test-sections:${testId}`);
      if (raw) {
        const parsed: SectionState[] = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const questions = parsed.flatMap((s) => s.questions);
          const first = questions[0];
          return {
            sections: parsed,
            totalQuestions: questions.length,
            firstQuestionId: first?.id ?? null,
          };
        }
      }
    } catch {
      // ignore
    }
    const previewSections = role?.preview.sections ?? [];
    return {
      sections: previewSections.map((s, i) => ({ id: `section-${i}`, title: s.title, minutes: 0, questions: [] as Question[] })),
      totalQuestions: previewSections.length,
      firstQuestionId: previewSections.length > 0 ? "seed-0" : null,
    };
  }, [testId, role?.preview.sections]);

  const durationMinutes = role?.preview.durationMinutes ?? 60;

  if (!questionId) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#f8f6ff] via-[#fbfaff] to-[#f4f0ff] text-zinc-900">
        <div className="border-b border-white/60 bg-white/50 backdrop-blur-sm px-6 py-3 shadow-[0_1px_0_0_rgba(77,62,240,0.06)]">
          <div className="mx-auto flex max-w-4xl items-center gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-corePurple/10">
              <IconInfo className="h-4 w-4 text-corePurple" />
            </div>
            <span className="text-sm font-medium text-zinc-600">
              This is a preview of your test. Complete the steps below before starting.
            </span>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
            <div className="min-w-0 lg:pt-4">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-corePurple/80">
                Assessment
              </p>
              <h1 className="mt-3 font-fustat text-3xl font-semibold tracking-tight text-graphite sm:text-4xl sm:leading-[1.15]">
                Welcome. You&apos;ve been invited to take a test.
              </h1>
              <div className="mt-8 space-y-1">
                <p className="text-[15px] leading-relaxed text-zinc-600">
                  To have a great experience:
                </p>
                <ul className="mt-4 space-y-3 text-[15px] text-zinc-600">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-corePurple to-violet" />
                    Watch the introductory video first so you feel comfortable and perform your best.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-corePurple to-violet" />
                    Ensure you have a stable internet connection and a quiet environment.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-corePurple to-violet" />
                    <span>
                      Before taking the test, please go through the{" "}
                      <Link href="#faq" className="font-medium text-corePurple underline underline-offset-2 hover:text-violet">
                        FAQs
                      </Link>{" "}
                      to resolve your queries related to the test or the HackerRank platform.
                    </span>
                  </li>
                </ul>
                <p className="mt-8 rounded-xl border border-zinc-200/80 bg-white/70 px-5 py-4 text-sm font-medium text-zinc-700 shadow-sm">
                  <span className="text-corePurple font-semibold">Estimated time: {durationMinutes} minutes</span>
                </p>
              </div>
            </div>

            <div className="space-y-6 pt-12 lg:pt-20">
              <div className="overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/90 shadow-[0_4px_24px_-4px_rgba(77,62,240,0.08),0_2px_8px_-2px_rgba(0,0,0,0.04)]">
                <div className="p-6 sm:p-7">
                  <h2 className="text-lg font-semibold text-zinc-900">Introductory video</h2>
                  <div className="mt-4 aspect-video w-full overflow-hidden rounded-xl border border-zinc-100 bg-gradient-to-br from-zinc-50 to-zinc-100/80 shadow-inner min-h-[280px] sm:min-h-[320px]">
                    <div className="flex h-full min-h-[280px] sm:min-h-[320px] w-full flex-col items-center justify-center gap-3 text-zinc-400">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-lg ring-1 ring-zinc-200/60 transition hover:scale-105 hover:shadow-xl">
                        <IconPlay className="h-10 w-10 text-corePurple ml-0.5" />
                      </div>
                      <p className="text-sm font-medium text-zinc-500">Video placeholder</p>
                    </div>
                  </div>
                  <div className="mt-6 flex justify-center">
                    <Link
                      href={firstQuestionId ? `/tests/${testId}/preview?question=${encodeURIComponent(firstQuestionId)}` : "#"}
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-corePurple to-violet px-5 py-3 text-sm font-semibold text-white shadow-[0_4px_14px_-2px_rgba(77,62,240,0.45)] transition hover:shadow-[0_6px_20px_-2px_rgba(77,62,240,0.5)] hover:brightness-105 disabled:opacity-50"
                    >
                      Start test
                      <IconChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <div className="mx-auto max-w-3xl px-6 py-5">
        <div className="flex items-center gap-2 text-xs text-zinc-500">
          <Link href="/tests" className="hover:text-zinc-700">
            Tests
          </Link>
          <IconChevronRight className="h-3.5 w-3.5 text-zinc-400" />
          <Link
            href={`/tests/${testId}`}
            className="truncate text-zinc-600 hover:text-zinc-700"
          >
            {role?.preview.testTitle ?? "Hiring Test"}
          </Link>
          <IconChevronRight className="h-3.5 w-3.5 text-zinc-400" />
          <span className="text-zinc-500">Preview</span>
        </div>

        <div className="mt-2 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h1 className="font-fustat truncate text-2xl font-semibold text-graphite">
              Question Preview
            </h1>
          </div>

          <Link
            href={`/tests/${testId}/preview`}
            className="inline-flex h-9 items-center justify-center rounded-lg border border-zinc-200 bg-white px-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
          >
            Back to intro
          </Link>
        </div>

        <div className="mt-6">
          {question ? (
            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <div className="mb-4 flex flex-wrap gap-2 text-xs text-zinc-500">
                <span className="rounded-full bg-zinc-100 px-2 py-0.5">
                  {question.skill}
                </span>
                <span className="rounded-full bg-zinc-100 px-2 py-0.5">
                  {question.type}
                </span>
                <span className="rounded-full bg-zinc-100 px-2 py-0.5">
                  {question.timeMinutes} mins
                </span>
              </div>
              <div className="mb-6 text-base font-medium text-zinc-900">
                {question.description}
              </div>
              {isMultipleChoice && question.options && question.options.length > 0 ? (
                <div className="space-y-3">
                  {question.options.map((opt, i) => (
                    <label
                      key={i}
                      className="flex cursor-pointer items-center gap-3 rounded-xl border border-zinc-200 p-4 transition hover:bg-zinc-50 has-[:checked]:border-corePurple has-[:checked]:bg-softLavender/50"
                    >
                      <input
                        type="radio"
                        name="answer"
                        value={opt}
                        checked={selectedOption === opt}
                        onChange={() => setSelectedOption(opt)}
                        className="h-4 w-4 border-zinc-300 text-corePurple focus:ring-corePurple"
                      />
                      <span className="text-sm text-zinc-800">{opt}</span>
                    </label>
                  ))}
                </div>
              ) : (
                <textarea
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  placeholder="Type your answer here..."
                  rows={5}
                  className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:border-zinc-300 focus:shadow-[0_0_0_3px_rgba(0,0,0,0.04)]"
                />
              )}
            </div>
          ) : questionId ? (
            <div className="rounded-2xl border border-dashed border-zinc-200 bg-zinc-50/50 p-12 text-center">
              <p className="text-sm text-zinc-500">
                Question not found. It may have been removed.
              </p>
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-zinc-200 bg-zinc-50/50 p-12 text-center">
              <p className="text-sm text-zinc-500">
                Assessment content will appear here. Click &quot;Preview
                question&quot; on a question to see it in full.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
