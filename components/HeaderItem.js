import React from 'react';

export default function HeaderItem({ title, Icon }) {
	return (
		<div className='flex flex-col hover:text-white items-center cursor-pointer w-12 group sm:w-18'>
			<Icon className='h-6 mb-1 group-hover:animate-bounce' />
			<p className='opacity-0 group-hover:opacity-100 tracking-widest'>
				{title}
			</p>
		</div>
	);
}
