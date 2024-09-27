interface Props {
  title?: string;
  fontSize?: number;
  bgColor?: string;
  textColor?: string;
}

const Chip: React.FC<Props> = ({title, fontSize, bgColor, textColor}) => {
  const fontSizeCss = fontSize ? `text-[${fontSize}px]` : 'text-base'
  const titleText = title ? title : 'Company Profile'
  const bgTextCss = bgColor ? bgColor : 'bg-bgLightSkyBlue'
  const textColorCss = textColor ? textColor : 'text-altPrimary'
  
  return (
    <div className="inline-block items-start text-left">
      <p className="pb-4 px-2 rounded-lg relative"><span className="${bgTextCss} 0 rounded-xl ${textColorCss} font-normal px-4 py-1 ${fontSizeCss}">{titleText}</span></p>
    </div>
  )
}

export default Chip;

