interface Props {
  id: number;
  title: string;
  description: string;
  icon?: string;
  buttonText?: string;
  reverse?: boolean;
}

function Section({
  id,
  title,
  description,
  icon,
  buttonText,
  reverse = false,
}: Props) {
  return (
    <div
      className={`relative flex items-start gap-12 mb-10 ${
        reverse
          ? "md:justify-self-end flex-row-reverse md:-mr-[5.8rem]"
          : "md:justify-self-start md:-ml-[5.8rem]"
      }`}
    >
      <div className="flex-shrink-0 bg-yellow-400 w-10 h-10 flex items-center justify-center rounded-full text-black font-bold">
        {id}
      </div>
      <div className="">
        <div
          className={`flex items-center gap-4 mb-4 ${
            reverse ? "flex-row-reverse" : "justify-start"
          } `}
        >
          <img src={icon} className="w-10" />
          <h3 className="text-2xl font-medium ">{title}</h3>
        </div>
        <p className={`text-gray-400 ${reverse ? "text-right" : "text-left"}`}>
          {description}
        </p>
        {buttonText && (
          <button className="px-4 py-2 md:py-3 font-bold bg-yellow-400 text-black rounded-full hover:bg-yellow-500 mt-8">
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
}

export default Section;
