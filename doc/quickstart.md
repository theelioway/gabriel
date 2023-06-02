# Quickstart jeeves

- [Prerequisites](./prerequisites)

## Nutshell

- Use the `jeeves.*` files to paste snippets and experiment with code.
- Dip into **jeeves** documentation.

## Pretty Ugly

Auto format `HTML`, `MarkDown`, `JavaScript`, `JSON`, `SCSS` files using **prettier**.

1. cd into `~/path/to/elioway/elioangels/jeeves`.
2. Start the prettyUgly service typing `gulp prettyUgly`.
3. Add any files you want to look prettier to the `jeeves/pretty/ugly` folder.
4. Find the prettified file in `jeeves/pretty` folder.

**Example: Use prettyUgly to prettify API output.**

- Start `gulp prettyUgly`.
- Save output from an API into the `pretty/ugly` folder. e.g.

```
curl -X GET http://localhost:8000/api/contacts/ --output ~/path/to/elioway/elioangels/jeeves/pretty/ugly/contacts.json
```

_Use the `--output path` option rather than `> path` because the former command creates the file on completion._

- Find the prettier file in `~/path/to/elioway/elioangels/jeeves/pretty/contacts.json`
