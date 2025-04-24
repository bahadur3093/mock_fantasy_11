import { getFormatedDate } from "../../../../../utils/date.util";
import { FaCalendarAlt } from "react-icons/fa";

interface DateTimeProps {
  date: Date | string;
}

export default function DateTime({ date }: DateTimeProps) {
  return (
    <div className="flex items-center">
      <FaCalendarAlt className="h-4 w-4 mr-1 text-gray-400" />
      <span className="text-gray-600 text-sm">{getFormatedDate(date)}</span>
    </div>
  );
}
