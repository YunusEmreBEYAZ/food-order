import Image from 'next/image'

export default function MenuItem() {
    return (
<div className="bg-gray-800 p-4 rounded-lg text-center">
                <Image className='rounded-lg' src="/pizza1.jpg" alt="Pizza" width={300} height={200} />
                <h3 className="uppercase font-semibold text-red-500 my-4"> Vegan Pizza</h3>
                <p className="text-gray-100 text-sm">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <button className="bg-red-600 text-white rounded-full my-2 py-2 px-4">Add to cart 13$</button>
            </div>
            )
}