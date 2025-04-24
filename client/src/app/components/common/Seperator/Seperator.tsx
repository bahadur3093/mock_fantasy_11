interface LineSeperatorProps {
  classes?: string;
}

export default function LineSeperator({ classes }: LineSeperatorProps) {
  return (
    <hr
      className={`border-t-4 border-gray-200 rounded-full w-full mx-auto ${classes}`}
    />
  );
}
