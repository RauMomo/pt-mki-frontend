const galleryActivity1 = new Proxy({"src":"/_astro/gallery-activity-1.mdhasbwg.png","width":1664,"height":1280,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/rizqiko/Documents/Projects/pt_mki/src/content/gallery/gallery-activity-1.png";
							}
							
							return target[name];
						}
					});

export { galleryActivity1 as default };
