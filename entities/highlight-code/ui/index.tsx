import { Highlight, themes } from 'prism-react-renderer';
import useFormattedCode from '../hooks/use-formatted-code';

export default function HighlightCode({
	children: code,
}: {
	children: string;
}) {
	const formattedCode = useFormattedCode(code);

	return (
		<Highlight
			theme={themes.vsDark}
			code={formattedCode}
			language='tsx'
		>
			{({ style, tokens, getLineProps, getTokenProps }) => (
				<pre
					className='p-4 rounded-sm max-w-full whitespace-pre-wrap break-all font-mono text-sm m-[0px]'
					style={{
						...style,
						tabSize: 2,
					}}
				>
					{tokens.map((line, i) => (
						<div key={i} {...getLineProps({ line })}>
							<span className='inline-block w-[2em] opacity-50'>{i + 1}</span>
							{line.map((token, key) => (
								<span key={key} {...getTokenProps({ token })} />
							))}
						</div>
					))}
				</pre>
			)}
		</Highlight>
	);
}
