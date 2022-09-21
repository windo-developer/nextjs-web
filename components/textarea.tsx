interface TextAreaProps {
  name?: string;
  label?: string;
  [key: string]: any;
}

export default function TextArea({ label, name, ...rest }: TextAreaProps) {
  return (
    <div>
      {label ? (
        <label
          htmlFor={name}
          className="mt-1 shadow-sm w-full text-sm focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500"
        >
          {label}
        </label>
      ) : null}
      <textarea
        id={name}
        rows={4}
        className="mt-1 shadow-sm w-full focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500"
        {...rest}
      />
    </div>
  );
}
