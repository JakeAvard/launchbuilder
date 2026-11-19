type AssessmentProps = {
  formId?: string;
};

const questions = [
  'What stage of life are you in?',
  'What area of life needs the most attention?',
  'How would you rate your overall direction right now?',
  'What is your biggest obstacle?',
  'How intentional are you about your weekly schedule and priorities?',
  'What would you most like to accomplish in the next 90 days?',
  'Are you ready to make meaningful changes and follow through?',
  'Your name and email address',
];

export function Assessment({ formId }: AssessmentProps) {
  if (formId) {
    const embedUrl = `https://tally.so/embed/${formId}?alignLeft=1&hideTitle=1&transparentBackground=1`;
    return (
      <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
        <iframe
          src={embedUrl}
          title="The Great Lock-In 60-second assessment"
          width="100%"
          height="760"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
        />
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-9">
      <div className="flex items-center justify-between gap-4 border-b border-border pb-5">
        <div>
          <p className="text-sm font-bold">Personal assessment</p>
          <p className="mt-1 text-xs text-muted-foreground">8 quick prompts · About 60 seconds</p>
        </div>
        <span className="rounded-full bg-forest-50 px-3 py-1.5 text-xs font-bold text-forest-800">Preview</span>
      </div>
      <ol className="mt-6 grid gap-3 sm:grid-cols-2">
        {questions.map((question, index) => (
          <li key={question} className="flex gap-3 rounded-xl bg-neutral-50 p-4">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white text-xs font-bold text-forest-800 shadow-sm">{index + 1}</span>
            <span className="pt-1 text-sm font-medium leading-relaxed">{question}</span>
          </li>
        ))}
      </ol>
      <div className="mt-7 rounded-xl border border-dashed border-forest-200 bg-forest-50/70 p-5">
        <p className="text-sm font-semibold text-forest-900">Assessment connection not configured yet.</p>
        <p className="mt-1 text-sm leading-relaxed text-forest-800">The live questionnaire will appear here once the Tally form is created and its public form ID is added to the site configuration. This preview does not collect or transmit responses.</p>
      </div>
    </div>
  );
}
