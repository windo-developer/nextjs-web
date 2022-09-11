import { classjoin } from "../libs/utils";

interface MessageProps {
  message: string;
  avatarURL?: string;
  reversed?: boolean;
}

export default function Message({
  message,
  avatarURL,
  reversed,
}: MessageProps) {
  return (
    <div
      className={classjoin(
        "flex items-start",
        reversed ? "flex-row-reverse space-x-reverse space-x-2" : "space-x-2"
      )}
    >
      <div className="w-8 h-8 bg-slate-300 rounded-full" />
      <div className="p-2 border border-gray-300 rounded-md text-sm text-gray-700 font-medium">
        <p>{message}</p>
      </div>
    </div>
  );
}
