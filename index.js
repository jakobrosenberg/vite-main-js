const { writeFileSync } = require("fs");

module.exports = (output = "dist/main.js") => ({
  writeBundle: (options, bundle) => {
    const [path] = Object.entries(bundle).find(([_, file]) => file.isEntry);
    writeFileSync(output, `export * from "./${path}"`);
  },
});
