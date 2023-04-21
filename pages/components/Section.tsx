import Image from 'next/image';

interface ISection {
	imageSrc: string;
	imageAlt: string;
	description: string;
}

export default function Section({ imageSrc, imageAlt, description }: ISection) {
	return (
		<div className='flex flex-wrap justify-center items-center mb-12'>
			<div className='w-full md:w-1/2 md:pr-8'>
				<Image src={imageSrc} alt={imageAlt} width={640} height={480} />
			</div>
			<div className='w-full md:w-1/2 mt-6 md:mt-0'>
				<p>{description}</p>
			</div>
		</div>
	);
}
