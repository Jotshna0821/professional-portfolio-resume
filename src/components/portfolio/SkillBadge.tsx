interface SkillBadgeProps {
  label: string;
}

const SkillBadge = ({ label }: SkillBadgeProps) => {
  return (
    <span className="inline-block px-3 py-1 text-sm font-body font-medium bg-secondary text-secondary-foreground rounded-sm border border-border">
      {label}
    </span>
  );
};

export default SkillBadge;
