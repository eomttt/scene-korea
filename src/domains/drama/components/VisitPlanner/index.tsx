import type { VisitPlan } from "../../utils/visit-plans";

export function VisitPlanner({ plan }: { plan: VisitPlan }) {
  const checkedDate = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${plan.checkedAt}T00:00:00Z`));

  return (
    <section className="visit-planner" aria-labelledby="visit-planner-title">
      <p className="eyebrow">Before you set out</p>
      <h2 id="visit-planner-title">Plan this outing</h2>
      <p className="visit-plan-overview">{plan.overview}</p>
      <div className="visit-plan-columns">
        <div>
          <h3>{plan.arrival.heading}</h3>
          <p>{plan.arrival.text}</p>
          <h3 className="visit-plan-subheading">A suggested schedule</h3>
          <p className="visit-plan-estimate">Allow extra time for traffic, queues and photo breaks. These are planning estimates, not live journey times.</p>
          <ol className="visit-plan-schedule">
            {plan.schedule.map((step) => (
              <li key={step.label}>
                <strong>{step.label}</strong>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="visit-plan-essentials">
          <h3>What to budget for</h3>
          <p>{plan.budget}</p>
          <h3>Opening and access</h3>
          <p>{plan.access}</p>
          <h3>If the weather changes</h3>
          <p>{plan.weather}</p>
        </div>
      </div>
      <details className="visit-plan-sources">
        <summary>Travel information sources · checked {checkedDate}</summary>
        <p>Researched from the references below. Confirm today’s opening times, fares and access with the operator before travelling.</p>
        <ul>
          {plan.sources.map((source) => (
            <li key={source.url}>
              <a href={source.url} target="_blank" rel="noopener noreferrer">{source.label}</a>
            </li>
          ))}
        </ul>
      </details>
    </section>
  );
}
