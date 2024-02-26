import Image from 'next/image'

export default function HomeMenu() {
    return (
    <section>
        <div className="text-center">
            <h3 className="uppercase font-semibold text-gray-500 italic">Check out deals</h3>
            <h2 className="uppercase font-bold text-4xl text-red-600 italic">Menu</h2>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="bg-gray-300 p-4 rounded-lg text-center">
                <Image className='rounded-lg' src="/pizza1.jpg" alt="Pizza" width={300} height={200} />
                <h3 className="uppercase font-semibold text-red-500 my-3"> Vegan Pizza</h3>
                <p className="text-gray-500 text-sm">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <button className="bg-red-600 text-white rounded-full my-2 py-2 px-4">Add to cart 13$</button>
            </div>
            
        </div>
    </section>
)
}