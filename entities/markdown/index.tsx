import MarkdownLib from 'markdown-to-jsx';
import React from 'react';
import HighlightCode from '../highlight-code/ui';

type Props = { answer: string };

export default function Markdown({ answer }: Props) {
	return (
		<MarkdownLib
			options={{
				overrides: {
					code: {
						component: HighlightCode,
					},
					p: {
						component: 'div',
					},
				},
			}}
		>
			{answer}
		</MarkdownLib>
	);
}
