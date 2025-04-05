import { useEffect, useState } from 'react';
import * as prettier from 'prettier/standalone';
import * as babelParser from 'prettier/parser-babel';
import estree from 'prettier/plugins/estree';
import * as parserHtml from 'prettier/plugins/html';

export default function useFormattedCode(initialCode: string) {
	const [formattedCode, setFormattedCode] = useState('');

	useEffect(() => {
		const format = async () => {
			try {
				const formatted = await prettier.format(initialCode, {
					parser: 'babel-ts',
					plugins: [babelParser, parserHtml, estree],
					semi: false,
					singleQuote: true,
					jsxSingleQuote: true,
					printWidth: 80,
					tabWidth: 4,
					trailingComma: 'es5',
				});
				setFormattedCode(formatted);
			} catch (error) {
				console.error('Formatting error:', error);
				setFormattedCode(initialCode);
			}
		};

		format();
	}, [initialCode]);

	return formattedCode;
}
