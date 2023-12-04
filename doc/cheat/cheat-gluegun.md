# Cheat gluegun

## filesystem

```javascript
// Node https://nodejs.org/docs/latest/api/path.html#path_path_resolve_paths
toolbox.filesystem.eol // This value is the end of line byte sequence.
toolbox.filesystem.homedir() // This function retrieves the path to the home directory.
toolbox.filesystem.subdirectories(path) // Finds the immediate subdirectories in a given directory.
toolbox.filesystem.chmodSync(path) // https://nodejs.org/api/fs.html#fs_fs_chmodsync_path_mode
toolbox.filesystem.resolve(...pathParts)
// fs-jetpack https://github.com/szwacz/fs-jetpack
toolbox.filesystem.append(path, contents) toolbox.filesystem.data to the end of a file.
toolbox.filesystem.copy(path, toPath)
toolbox.filesystem.cwd()
toolbox.filesystem.dir(path) // ensures dir exists and creates a new jetpack instance with it's `cwd` pointing there.
toolbox.filesystem.exists(path) // file or directory
toolbox.filesystem.file(path)  // ensures file exists
toolbox.filesystem.find(path, { ...search })
toolbox.filesystem.inspect(path)
toolbox.filesystem.inspectTree(path)
toolbox.filesystem.list(path)
toolbox.filesystem.move(path, toPath)
toolbox.filesystem.path(...pathParts)
toolbox.filesystem.read(path, "json/utf/etc" )
toolbox.filesystem.remove(path)
toolbox.filesystem.rename(path, toPath)
toolbox.filesystem.symlink()
toolbox.filesystem.write(path, contents)
```

## patching

```javascript
const barbExists = await toolbox.patching.exists("config.txt", "Barb")
const barbExists = await toolbox.patching.exists("config.txt", /Barb/)
const barbExists = await toolbox.patching.exists(
  "config.txt",
  new Regex(/Barb/, "i"),
)

await toolbox.patching.update("config.json", (config) => {
  config.key = "new value"
  return config
})

await toolbox.patching.update("config.txt", (data) => {
  return data.replace("Jamon", "Boss")
})

await toolbox.patching.append("config.txt", "Append this string\n")
await toolbox.patching.prepend("config.txt", "Prepend this string\n")
await toolbox.patching.replace(
  "config.txt",
  "Remove this string\n",
  "Replace with this string\n",
)

await toolbox.patching.patch("config.txt", {
  insert: "Jamon",
  before: "Something else",
})
await toolbox.patching.patch("config.txt", {
  insert: "Jamon",
  after: "Something else",
})
await toolbox.patching.patch("config.txt", {
  insert: "Jamon",
  replace: "Something else",
})
await toolbox.patching.patch("config.txt", {
  insert: "Jamon",
  replace: "Something else",
  force: true,
})
await toolbox.patching.patch("config.txt", { delete: "Something" })
await toolbox.patching.patch("config.txt", {
  insert: "Jamon",
  after: new RegExp("some regexp"),
})
await toolbox.patching.patch(
  "config.txt",
  { insert: "Jamon", after: "Something else" },
  { insert: "Jamon", before: "Something else" },
)
```
