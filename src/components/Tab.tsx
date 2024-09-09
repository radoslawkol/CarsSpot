interface IProps {
	isActive: boolean;
	onActiveTab: () => void;
	children: React.ReactNode;
}

export default function Tab({ isActive, onActiveTab, children }: IProps) {
	const active =
		"text-fontColor-secondary border-b-1 border-secondary font-semibold";
	return (
		<button
			className={`${isActive && active} pb-1`}
			onClick={() => onActiveTab()}
		>
			{children}
		</button>
	);
}
