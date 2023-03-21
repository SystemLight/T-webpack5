import React, {SVGProps} from 'react'

export interface SvgIconProps extends SVGProps<SVGSVGElement> {
  iconClass: string
}

function SvgIcon({iconClass, ...svgProps}: SvgIconProps) {
  return (
    <svg {...svgProps}>
      <use xlinkHref={'#icon-' + iconClass}/>
    </svg>
  )
}

export default SvgIcon
