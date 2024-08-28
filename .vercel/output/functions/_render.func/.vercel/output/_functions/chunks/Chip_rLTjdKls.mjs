import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as createAstro } from './astro/server_zESxChJ5.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$Chip = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Chip;
  const { title, fontSize, bgColor, textColor } = Astro2.props;
  const fontSizeCss = fontSize ? `text-[${fontSize}px]` : "text-base";
  const titleText = title ? title : "Company Profile";
  const bgTextCss = bgColor ? bgColor : "bg-bgLightSkyBlue";
  const textColorCss = textColor ? textColor : "text-altPrimary";
  return renderTemplate`${maybeRenderHead()}<div class="inline-block items-start text-left"> <p${addAttribute(`pb-4 px-2 rounded-lg relative`, "class")}><span${addAttribute(`${bgTextCss} 0 rounded-xl ${textColorCss} font-normal px-4 py-1 ${fontSizeCss}`, "class")}>${titleText}</span></p> </div>`;
}, "/Users/rizqiko/Documents/Projects/pt_mki/src/components/Chip.astro", void 0);

export { $$Chip as $ };
