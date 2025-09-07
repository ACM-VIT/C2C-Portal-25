type Props = {
  placeholder: string;
  readOnly?: boolean;
  disabled?: boolean;
};

export default function InputBox({ placeholder, readOnly = false, disabled = false }: Props) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      readOnly={readOnly}
      disabled={disabled}
      className="w-full h-[87px] px-4 py-2 mt-4 rounded-lg border border-emerald-500 bg-[rgba(73,77,75,1)] text-white text-lg focus:outline-none focus:border-emerald-400 transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
    />
  );
}
