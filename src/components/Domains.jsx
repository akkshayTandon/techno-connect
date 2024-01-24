import Domain from "./Domain"

export default function Domains() {

    const domainsArray = [
        {
            name: "Frontend Development",
            iconData: {
                height: "20",
                width: "25",
                viewBox: "0 0 640 512",
                pathD: "M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"
            }
        },
        {
            name: "Android Development",
            iconData: {
                height: "20",
                width: "15",
                viewBox: "0 0 384 512",
                pathD: "M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM144 448c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H160c-8.8 0-16 7.2-16 16zM304 64H80V384H304V64z"
            }
        },
        {
            name: "Blockchain Technology",
            iconData: {
                height: "20",
                width: "20",
                viewBox: "0 0 512 512",
                pathD: "M260.4 254.9 131.5 33.1a2.2 2.2 0 0 0 -3.8 0L.3 254.9A2.2 2.2 0 0 0 .3 257.1L129.1 478.9a2.2 2.2 0 0 0 3.8 0L260.4 257.1A2.2 2.2 0 0 0 260.4 254.9zm39.1-25.7a2.2 2.2 0 0 0 1.9 1.1h66.5a2.2 2.2 0 0 0 1.9-3.3L259.1 33.1a2.2 2.2 0 0 0 -1.9-1.1H190.7a2.2 2.2 0 0 0 -1.9 3.3zM511.7 254.9 384.9 33.1A2.2 2.2 0 0 0 383 32h-66.6a2.2 2.2 0 0 0 -1.9 3.3L440.7 256 314.5 476.7a2.2 2.2 0 0 0 1.9 3.3h66.6a2.2 2.2 0 0 0 1.9-1.1L511.7 257.1A2.2 2.2 0 0 0 511.7 254.9zM366 284.9H299.5a2.2 2.2 0 0 0 -1.9 1.1l-108.8 190.6a2.2 2.2 0 0 0 1.9 3.3h66.5a2.2 2.2 0 0 0 1.9-1.1l108.8-190.6A2.2 2.2 0 0 0 366 284.9z"
            }
        },
        {
            name: "Data Science Analytics",
            iconData: {
                height: "20",
                width: "20",
                viewBox: "0 0 512 512",
                pathD: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zm-312 8v64c0 13.3 10.7 24 24 24s24-10.7 24-24l0-64c0-13.3-10.7-24-24-24s-24 10.7-24 24zm80-96V280c0 13.3 10.7 24 24 24s24-10.7 24-24V120c0-13.3-10.7-24-24-24s-24 10.7-24 24zm80 64v96c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
            }
        },
        {
            name: "Programming Languages",
            iconData: {
                height: "20",
                width: "22.5",
                viewBox: "0 0 576 512",
                pathD: "M9.4 86.6C-3.1 74.1-3.1 53.9 9.4 41.4s32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 9.4 86.6zM256 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
            }
        }
    ];

    return (
        <section className="text-gray-400 bg-gray-900 bg-transparent body-font mt-0">
            <div className="container px-5 py-8 mx-auto flex flex-col">
                <div className="lg:w-4/6 mx-auto">

                    <div className="flex flex-col items-center justify-center">
                        <div className="md:p-0 text-center sm:pr-8 sm:py-8">
                            <div className="flex flex-col items-center text-center justify-center">
                                <h1 className="font-medium title-font text-black text-xl sm:text-2xl">Get Specialized In These Domains.</h1>
                                <div className="w-12 h-1 bg-yellow-400 rounded mt-2 mb-4"></div>
                                <p className="text-base text-gray-400">At Technoconnect, we excel in various
                                    domains to bring your ideas to life. Our skills include:</p>
                            </div>
                        </div>

                        {domainsArray.map((domain, id) => {
                            return <Domain key={id} domainName={domain.name} domainIconData={domain.iconData}></Domain>
                        })}
                        
                    </div>

                    <div className="rounded-lg h-64 overflow-hidden mt-8">
                        <img alt="content" className="object-contain object-center h-full w-full" src="/img/domains.png" loading="lazy"/>
                    </div>
                </div>
            </div>
        </section>
    )
}