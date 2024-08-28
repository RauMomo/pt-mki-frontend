const Sinarmas = new Proxy({"src":"/_astro/Sinarmas.CE22dywi.png","width":1232,"height":896,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/rizqiko/Documents/Projects/pt_mki/src/content/customers/Sinarmas.png";
							}
							
							return target[name];
						}
					});

export { Sinarmas as default };
