import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface IProps {
	heading: string;
	text: string;
}

export default function FaqItem({ heading, text }: IProps) {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<article className='flex flex-col items-start gap-6'>
			<h3 className='font-heading tracing-[-0.03em] text-[25px]'>{heading}</h3>
			<p className={`font-body ${isExpanded ? "" : "line-clamp-2"}`}>{text}</p>
			<button
				className='pb-[6px] flex items-center gap-2 border-b-[1.5px] border-white hover:scale-95 delay-150'
				onClick={() => setIsExpanded((prev) => !prev)}
			>
				Rozwiń
				{isExpanded ? (
					<FontAwesomeIcon icon={faArrowUp} />
				) : (
					<FontAwesomeIcon icon={faArrowDown} />
				)}
			</button>
		</article>
	);
}
