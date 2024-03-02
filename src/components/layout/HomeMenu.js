
import MenuItem from '../menuItem/MenuItem'
import SectionHeaders from './SectionHeaders'

export default function HomeMenu() {
    return (
    <section>
        <div className="text-center my-6">
            <SectionHeaders subHeader={'Check out'} mainHeader={'Menu'} />
        </div>
        <div className="grid grid-cols-3 gap-6 mt-8">
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