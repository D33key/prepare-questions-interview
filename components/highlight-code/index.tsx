import { type Code } from '@/types';
import useFormattedCode from '@/utils/hooks/useFormattedCode';
import { Highlight, themes } from 'prism-react-renderer';

export default function HighlightCode({ code }: { code: Code }) {
	const typeofCode = typeof code === 'object';
	const formattedCode = useFormattedCode(typeofCode ? code.code : code);
	return (
		<>
			{typeofCode && code.title && <h4>{code.title}</h4>}
			<Highlight
				theme={themes.shadesOfPurple}
				code={formattedCode}
				language='tsx'
			>
				{({ style, tokens, getLineProps, getTokenProps }) => (
					<pre
						style={{
							...style,
							padding: '20px',
							borderRadius: '4px',
							maxWidth: '100%',
							whiteSpace: 'pre-wrap',
							wordBreak: 'break-word',
							fontFamily: 'monospace',
							fontSize: '14px',
							tabSize: 2,
							margin: 0,
						}}
					>
						{tokens.map((line, i) => (
							<div key={i} {...getLineProps({ line })}>
								<span
									style={{
										display: 'inline-block',
										width: '2em',
										opacity: 0.5,
									}}
								>
									{i + 1}
								</span>
								{line.map((token, key) => (
									<span key={key} {...getTokenProps({ token })} />
								))}
							</div>
						))}
					</pre>
				)}
			</Highlight>
		</>
	);
}
