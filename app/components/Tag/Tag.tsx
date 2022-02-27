type Props = {
  children: React.ReactNode;
};

function Tag({ children }: Props) {
  return (
    <div className="inline-block rounded-lg py-[6px] px-sm bg-secondary-200 text-secondary-700 text-sm">
      {children}
    </div>
  );
}

export default Tag;
