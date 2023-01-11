module.exports = {
  typescript: {
    compile: false,
    rewritePaths: {
      "src/": "tmp/",
    },
  },
  files: ["./src/test.ts"]
}
