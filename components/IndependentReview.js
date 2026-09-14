export default function IndependentReview() {
  return (
    <section id="independent-review" className="bg-sky-700 py-16 text-white" aria-labelledby="independent-heading">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">Independent review</p>
          <div>
            <h2 id="independent-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">Don&apos;t take this website&apos;s conclusions on trust.</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-sky-50 sm:text-lg">Readers and management should verify every material claim against original project records, business-user feedback, contracts, UAT documentation and other primary evidence.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
