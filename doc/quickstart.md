# Quickstart gabriel

- [Prerequisites](./prerequisites)

## Nutshell

- Use the `gabriel.*` files to paste snippets and experiment with code.
- Dip into **gabriel** documentation.

## Pretty Ugly

Auto format `HTML`, `MarkDown`, `JavaScript`, `JSON`, `SCSS` files using **prettier**.

1. cd into `~/path/to/elioway/elioangels/gabriel`.
2. Start the prettyUgly service typing `gulp prettyUgly`.
3. Add any files you want to look prettier to the `gabriel/pretty/ugly` folder.
4. Find the prettified file in `gabriel/pretty` folder.

**Example: Use prettyUgly to prettify API output.**

- Start `gulp prettyUgly`.
- Save output from an API into the `pretty/ugly` folder. e.g.

```
curl -X GET http://localhost:8000/api/contacts/ --output ~/path/to/elioway/elioangels/gabriel/pretty/ugly/contacts.json
```

_Use the `--output path` option rather than `> path` because the former command creates the file on completion._

- Find the prettier file in `~/path/to/elioway/elioangels/gabriel/pretty/contacts.json`
