import Image from 'next/image';
import RightArrow from '../icons/RightArrow';

export default function Hero() {
    return (

        <section className="grid grid-cols-2 py-16">
            <div className='relative rounded-full'>
                <Image className='rounded-full' src={'/pizza1.jpg'} alt="Pizza" width={300} height={100} />
            </div>
            <div className='py-8'>
                <h1 className="text-4xl font-bold">The Best<br />
                 <span className='text-red-600 italic'>Pizza</span><br />
                  in Town</h1>
                <p className='mt-4 text-gray-500 text-sm text-justify'>Pizza is the best food which we do!
                Pizza is the best food which we do!
                Pizza is the best food which we do!
                Pizza is the best food which we do!
                </p>
                <div className='flex items-center justify-center'>
                    <button className=' flex bg-red-500 text-white px-4 py-2 rounded-full mt-4'>Order Now&nbsp;&nbsp; <RightArrow /></button>
                    <button className='flex px-4 py-2 rounded-full mt-4 ml-4 border'>Learn More&nbsp;&nbsp; <RightArrow /></button>
                </div>
            </div>
        
        </section>
    );
    }