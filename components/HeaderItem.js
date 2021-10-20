export default function HeaderItem({ title, Icon }) {
  return (
    <div className="flex flex-col items-center relative cursor-pointer group w-12 sm:w-20 hover:text-white ">
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className="absolute -bottom-6 hidden font-medium sm:group-hover:block uppercase tracking-widest">
        {title}
      </p>
    </div>
  );
}
