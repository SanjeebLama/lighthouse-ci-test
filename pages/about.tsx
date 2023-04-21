import Section from './components/Section';

export default function About() {
	return (
		<div className='container mx-auto py-10'>
			<h1 className='text-3xl font-bold mb-6'>About Us</h1>
			<p className='mb-8'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat.
			</p>
			<Section
				imageSrc='https://images.pexels.com/photos/1770803/pexels-photo-1770803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
				imageAlt='Image 1'
				description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
			/>
			<Section
				imageSrc='https://images.pexels.com/photos/18495/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
				imageAlt='Image 2'
				description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
			/>
			<Section
				imageSrc='https://images.pexels.com/photos/3354675/pexels-photo-3354675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
				imageAlt='Image 3'
				description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
			/>
			<Section
				imageSrc='https://images.pexels.com/photos/1677275/pexels-photo-1677275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
				imageAlt='Image 4'
				description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
			/>
		</div>
	);
}
