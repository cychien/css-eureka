type Props = {
  children: React.ReactNode;
};

function InlineCode({ children }: Props) {
  return (
    <span className="inline-block px-sm py-[2px] rounded-md bg-bg-300 text-gray-700 text-md font-mono">
      {children}
    </span>
  );
}

export default InlineCode;
