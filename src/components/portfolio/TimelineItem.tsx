interface TimelineItemProps {
  title: string;
  subtitle: string;
  location?: string;
  period: string;
  details?: string[];
}

const TimelineItem = ({ title, subtitle, location, period, details }: TimelineItemProps) => {
  return (
    <div className="mb-5 last:mb-0">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
        <div>
          <h3 className="font-body font-semibold text-foreground">{title}</h3>
          <p className="text-muted-foreground text-sm">{subtitle}{location ? ` · ${location}` : ""}</p>
        </div>
        <span className="text-sm text-accent font-medium whitespace-nowrap">{period}</span>
      </div>
      {details && details.length > 0 && (
        <ul className="mt-2 space-y-1">
          {details.map((d, i) => (
            <li key={i} className="text-sm text-muted-foreground pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-accent">
              {d}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TimelineItem;
