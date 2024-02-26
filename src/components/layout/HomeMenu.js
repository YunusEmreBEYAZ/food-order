
import MenuItem from '../menuItem/MenuItem'

export default function HomeMenu() {
    return (
    <section>
        <div className="text-center">
            <h3 className="uppercase font-semibold text-gray-500 italic">Check out deals</h3>
            <h2 className="uppercase font-bold text-4xl text-red-600 italic">Menu</h2>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-8">
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            
        </div>
    </section>
)
}