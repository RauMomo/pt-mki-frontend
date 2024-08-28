const hitachi = new Proxy({"src":"/_astro/hitachi.CGWEJZew.png","width":1232,"height":896,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/rizqiko/Documents/Projects/pt_mki/src/content/customers/hitachi.png";
							}
							
							return target[name];
						}
					});

export { hitachi as default };
