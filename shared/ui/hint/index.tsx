import React from 'react';

interface Props {
	children: React.ReactNode;
}

export default function Hint({ children }: Props) {
	return <p className='mt-2 text-sm text-gray-600 text-center'>{children}</p>;
}
