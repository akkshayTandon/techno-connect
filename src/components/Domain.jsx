/* eslint-disable react/prop-types */
import DomainIcon from "./DomainIcon"

export default function Domain({ domainName, domainIconData }) {
    return (
        <div className="glass text-orange-700 hover:scale-105 hover:text-black sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 p-4 sm:mt-4 text-center sm:text-left">
            <a className="flex justify-center gap-2 items-center">
                <DomainIcon height={domainIconData.height} width={domainIconData.width} viewBox={domainIconData.viewBox} path={domainIconData.pathD}></DomainIcon>
                
                {domainName}
            </a>
        </div>
    )
}