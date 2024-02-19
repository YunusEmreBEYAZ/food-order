import Image from 'next/image';

export default function Hero() {
    return (

        <section className="grid grid-cols-2">
            <div className='relative rounded-full mx-2 my-2'>
                <Image className='rounded-full' src={'/pizza1.jpg'} alt="Pizza" width={'100'} height={'100'} />
            </div>
            <div>
                <h1 className="text-4xl font-bold">The Best Pizza in Town</h1>
                <p className='mt-4 tex-gray-500'>Pizza is the best food which we do!</p>
                <div>
                    <button className='bg-red-500 text-white px-4 py-2 rounded-full mt-4'>Order Now</button>
                    <button className='px-4 py-2 rounded-full mt-4 ml-4'>Learn More</button>
                </div>
            </div>
        
        </section>
    );
    }