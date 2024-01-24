/* eslint-disable react/prop-types */

export default function DomainIcon({height, width, viewBox, path}){
    return (
        <svg className="ml-2 mr-2" xmlns="http://www.w3.org/2000/svg" height={height} width={width} viewBox={viewBox}><path fill="#c2410c" d={path} /></svg>
    )
}