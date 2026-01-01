import type { InfoDialogComponents } from "./types";

export type InfoDialogTriggerProps = {
	components: InfoDialogComponents;
	children: React.ReactNode;
};

export function InfoDialogTrigger({
	components,
	children,
}: InfoDialogTriggerProps) {
	const { DialogTrigger } = components;
	return (
		<DialogTrigger style={{ position: "fixed", top: "12px", left: "12px" }}>
			{children}
		</DialogTrigger>
	);
}
