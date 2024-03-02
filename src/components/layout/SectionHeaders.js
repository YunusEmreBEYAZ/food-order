export default function SectionHeaders({subHeader,mainHeader}) {
    return (
        <section>
            <div className="text-center">
                <h3 className="uppercase font-semibold text-gray-500 italic">{subHeader}</h3>
                <h2 className="uppercase font-bold text-4xl text-red-600 italic">{mainHeader}</h2>
            </div>
        </section>
    )
}