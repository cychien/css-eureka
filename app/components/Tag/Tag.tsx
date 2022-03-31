type Props = {
  children: React.ReactNode;
};

function Tag({ children }: Props) {
  return (
    <div className="inline-block rounded-lg py-[6px] px-sm bg-secondary-200 text-secondary-600 text-sm font-medium">
      {children}
    </div>
  );
}

export default Tag;
