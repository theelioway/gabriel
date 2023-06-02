# Cheat atom

[](//docs.elioway/./elioangels/shell/atom/doc/quickstart)

_Taken from git@gitlab.com:elioangels/shell/atom/README.md_

## Useful atom shortcuts you might forget

- `CRTL+SHIFT+P` List all actions - some with shortcuts.
- `CRTL+SHIFT+\` Reveal the file you are editing in the Tree View.
- `CRTL+\` Show/Hide Tree View.

## Search and Replace actions

Examples of similar patterns operating on simlar objects when you want to changes something fundamental.

```
let { x } = fuckingName
let { y } = anotherFuckingName
let { asfasfas } = asgsdgwefwa
let { opps, careful } = asgsdgwefwa
...
And you want replace respectively with:
let x = fuckingName.getData("x")
let y = anotherFuckingName.getData("x")
let asfasfas = asgsdgwefwa.getData("x")
```

Atom search and replace files with Regex... using lookaheads:

- FIND `let { (.[^,]*) } = (.*)`
- REPL `let $1 = $2.getData("x")`

### Inside Tree View

- `CRTL+SHIFT+P` List all Tree View actions - some with shortcuts.
- `i` Show/Hide hidden files and folders.
- `ALT-RIGHT` Expand All Recursively.
- `ALT-LEFT` Collapse All Recursively.

### ATOM_DISABLE_SHELLING_OUT_FOR_ENVIRONMENT

Elaborating on what @monroth suggested, the following steps solved it for me:

Edit `/var/lib/snapd/desktop/applications/atom_atom.desktop`:

Replace the line

```
Exec=env BAMF_DESKTOP_FILE_HINT=/var/lib/snapd/desktop/applications/atom_atom.desktop /snap/bin/atom ATOM_DISABLE_SHELLING_OUT_FOR_ENVIRONMENT=false /usr/bin/atom %F
```

with

```
Exec=env BAMF_DESKTOP_FILE_HINT=/var/lib/snapd/desktop/applications/atom_atom.desktop /snap/bin/atom %F
```
