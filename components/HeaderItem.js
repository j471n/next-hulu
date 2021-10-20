

export default function HeaderItem({ title, Icon}) {
  return (
    <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white ">
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className="opacity-0 font-medium group-hover:opacity-100 uppercase tracking-widest">
        {title}
      </p>
    </div>
  );
}
