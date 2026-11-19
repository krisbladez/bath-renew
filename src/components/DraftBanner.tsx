type Props = {
  message?: string;
};

export function DraftBanner({
  message = "Draft content — awaiting business-owner approval before public launch claims.",
}: Props) {
  return (
    <div className="draft-banner" role="status">
      <div className="page-shell">{message}</div>
    </div>
  );
}
