export function Anchor({
	url,
	children,
}: {
	url: string;
	children: React.ReactNode;
}) {
	return (
		<a key={url} href={url} target="_blank" rel="noopener noreferrer">
			{children}
		</a>
	);
}
