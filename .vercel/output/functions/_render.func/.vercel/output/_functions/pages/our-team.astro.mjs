import '../chunks/consulting.7a7741ac_Blqh4XAA.mjs';
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_zESxChJ5.mjs';
import 'kleur/colors';
import { $ as $$Breadcrumb } from '../chunks/Breadcrumb_DoFgB1gW.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import React, { useState } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { HiX } from 'react-icons/hi';
import Modal from 'react-modal';
import { s as styles } from '../chunks/our-team.8c5765c3_BgNZP0Wd.mjs';
import { a as apiConfig } from '../chunks/api_24DmY3bN.mjs';
import { $ as $$Layout } from '../chunks/Layout_DWP4yPAZ.mjs';
export { renderers } from '../renderers.mjs';

const CloseButton = React.forwardRef(
  (props, ref) => {
    const {
      absolute,
      className,
      defaultStyle = true,
      svgClass,
      ...rest
    } = props;
    const closeButtonAbsoluteClass = "absolute z-10";
    const closeButtonClass = classNames(
      "close-btn",
      defaultStyle && "close-btn-default",
      absolute && closeButtonAbsoluteClass,
      className
    );
    console.log("display close button");
    return /* @__PURE__ */ jsx("span", { className: closeButtonClass, role: "button", ...rest, ref, children: /* @__PURE__ */ jsx(HiX, { className: svgClass }) });
  }
);
CloseButton.defaultProps = {
  defaultStyle: true
};
const Dialog = (props) => {
  const {
    children,
    className,
    closable,
    width,
    height,
    style,
    isOpen,
    onClose,
    bodyOpenClassName,
    portalClassName,
    overlayClassName,
    contentClassName,
    closeTimeoutMS,
    ...rest
  } = props;
  const onCloseClick = (e) => {
    onClose(e);
  };
  const renderCloseButton = /* @__PURE__ */ jsx(
    CloseButton,
    {
      onClick: onCloseClick,
      className: "ltr:right-6 rtl:left-6 py-4"
    }
  );
  const contentStyle = {
    content: {
      inset: "unset"
    },
    ...style
  };
  if (width !== void 0) {
    contentStyle.content.width = "auto";
  }
  if (height !== void 0) {
    contentStyle.content.height = height;
  }
  const dialogClass = classNames(styles.dialogContent, contentClassName);
  return /* @__PURE__ */ jsx(
    Modal,
    {
      className: {
        base: classNames(styles.dialog, className),
        afterOpen: styles.dialogAfterOpen,
        beforeClose: styles.dialogAfterOpen
      },
      overlayClassName: {
        base: classNames(styles.dialogOverlay, overlayClassName),
        afterOpen: styles.dialogOverlayAfterOpen,
        beforeClose: styles.dialogOverlayBeforeClose
      },
      portalClassName: classNames("dialog-portal", portalClassName),
      bodyOpenClassName: classNames("dialog-open", bodyOpenClassName),
      ariaHideApp: false,
      isOpen,
      style: { ...contentStyle },
      closeTimeoutMS,
      ...rest,
      children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: dialogClass,
          initial: { transform: "scale(0.9)" },
          animate: {
            transform: isOpen ? "scale(1)" : "scale(0.9)"
          },
          children: [
            closable && renderCloseButton,
            children
          ]
        }
      )
    }
  );
};
Dialog.propTypes = {
  closable: PropTypes.bool ?? true,
  isOpen: PropTypes.bool.isRequired,
  overlayClassName: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]) ?? 520,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClose: PropTypes.func,
  portalClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  closeTimeoutMS: PropTypes.number ?? 150,
  bodyOpenClassName: PropTypes.string
};

const ProfileItem = ({ data }) => {
  var [dialogIsOpen, setIsDialog] = useState(false);
  var openDialog = (e) => {
    setIsDialog(true);
    console.log(dialogIsOpen);
  };
  var closeDialog = (e) => {
    e.preventDefault();
    setIsDialog(false);
    console.log("test");
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col flex-1 gap-8 justify-center items-center", children: [
      /* @__PURE__ */ jsx("a", { href: "", className: "circle", children: /* @__PURE__ */ jsx("img", { height: "128", width: "128", src: data.image, alt: data.name }) }),
      /* @__PURE__ */ jsxs("div", { className: "relative flex-grow flex flex-col gap-4 items-center text-center", children: [
        /* @__PURE__ */ jsx("h4", { children: data.name }),
        /* @__PURE__ */ jsx("p", { children: data.role }),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "w-auto z-10 text-black underline text-blue-700",
            title: "Preview Profile",
            onClick: openDialog,
            children: "Preview Profile"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      Dialog,
      {
        isOpen: dialogIsOpen,
        onClose: closeDialog,
        onRequestClose: closeDialog,
        width: 200,
        style: {
          marginTop: 250
        },
        contentClassName: "pb-0 px-0",
        children: /* @__PURE__ */ jsx("div", { className: "bg-white h-auto mt-auto mb-auto p-8", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col flex-1 gap-10 justify-center items-center text-center", children: [
          /* @__PURE__ */ jsx("a", { href: "", className: "circle", children: /* @__PURE__ */ jsx("img", { height: "128", width: "128", src: data.image, alt: data.name }) }),
          /* @__PURE__ */ jsx("h4", { children: data.name }),
          /* @__PURE__ */ jsx("p", { children: data.role }),
          /* @__PURE__ */ jsx("p", { children: data.description })
        ] }) })
      }
    )
  ] });
};

const $$OurTeam = createComponent(async ($$result, $$props, $$slots) => {
  const customCrumbs = [
    {
      text: "Home",
      href: "#"
    },
    {
      text: "Our Team",
      href: "/our-team",
      title: "Our Team"
    }
  ];
  async function fetchProfiles() {
    const response = await fetch(`${apiConfig.baseUrl}/profiles?populate[image]=*&pagination[pageSize]=7`, {
      headers: {
        Authorization: `Bearer ${apiConfig.lifetimeToken}`,
        "Content-Type": `application/json; charset=utf`
      }
    });
    const json = await response.json();
    return json.data;
  }
  var profileRawData = await fetchProfiles();
  var profiles = profileRawData.map((value) => {
    var imageUrl = `${apiConfig.fileBaseUrl}${value.attributes.image.data.attributes.formats.small.url}`;
    var largeImageUrl = `${apiConfig.fileBaseUrl}${value.attributes.image.data.attributes.url}`;
    var facilitator = {
      name: value.attributes.name,
      description: value.attributes.description,
      role: value.attributes.role,
      image: imageUrl,
      largeImage: largeImageUrl
    };
    return facilitator;
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Our Team" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col flex-1"> <div class="bg-bannerOt h-[360px] bg-cover bg-center flex items-center"> <section> <div class="flex flex-col justify-center mt-auto mb-auto gap-8"> <h2 class="text-white tracking-wide font-normal text-4xl">Our Team</h2> ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "customCrumbs": customCrumbs })} </div> </section> </div> <div class="bg-white my-8 mx-8"> <div class="grid grid-cols-1 gap-4"> <!-- First row with 1 column --> <div class="col-span-1 content-center mx-auto"> <div class="m-8 place-content-center place-items-center"> ${renderComponent($$result2, "ProfileItem", ProfileItem, { "client:load": true, "data": profiles[0], "client:component-hydration": "load", "client:component-path": "/Users/rizqiko/Documents/Projects/pt_mki/src/components/ProfileItem", "client:component-export": "default" })} </div> </div> <!-- Second row with 3 columns --> <div class="grid grid-cols-3 gap-4"> ${profiles.slice(1, 4).map((value) => {
    return renderTemplate`<div class="m-8 place-content-center place-items-center"> ${renderComponent($$result2, "ProfileItem", ProfileItem, { "client:load": true, "data": value, "client:component-hydration": "load", "client:component-path": "/Users/rizqiko/Documents/Projects/pt_mki/src/components/ProfileItem", "client:component-export": "default" })} </div>`;
  })} </div> <!-- Third row with 3 columns --> <div class="grid grid-cols-3 gap-4"> ${profiles.slice(4, 7).map((value) => {
    return renderTemplate`<div class="m-8 place-content-center place-items-center"> ${renderComponent($$result2, "ProfileItem", ProfileItem, { "client:load": true, "data": value, "client:component-hydration": "load", "client:component-path": "/Users/rizqiko/Documents/Projects/pt_mki/src/components/ProfileItem", "client:component-export": "default" })} </div>`;
  })} </div> </div> </div> </div>` })}`;
}, "/Users/rizqiko/Documents/Projects/pt_mki/src/pages/our-team.astro", void 0);

const $$file = "/Users/rizqiko/Documents/Projects/pt_mki/src/pages/our-team.astro";
const $$url = "/our-team";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$OurTeam,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
