# Cheat npm

## **Cache**

Load up cache - for instance, all the FunTyper games:

```
for R in (npm list --depth=0 -p)
  set NAME (string split "node_modules/" $R)[2]
  echo $NAME
  npm cache add $NAME
end

for R in (npm list --depth=0 -p)
  echo (string split -d "node_modules/" $R)
end


npm cache verify

npm i --prefer-offline
```

## **Publish**

```shell
npm version patch
npm version minor
npm publish
# First time
npm publish --access public
```

## **Package**

```shell
# Install local
npm i package

# Update local
npm i package@latest

# List + global
npm ls --depth=0
npm ls --depth=0 -g

# Update all packages
npm i -g ember-cli-update
ncu -u
npm i
```

## **File Install**

```
npm i file:../phaser3-timesup/
```

## **Global Install**

```
# Install global
npm i -g package

# List global
npm list -g --depth=0
```

## **Linking**

```
# Inside Linkable Package
npm link


# Inside Package Needing Link
npm link package-name-of-thing-you-linked
```

## **Local Install**

```
# Install global
npm i "../path"
```

## **elioWay Globals**

- @elioway/chisel
- @feathersjs
- ember-cli
- ember-cli-update
- generator-sin
- generator-thing
- gulp-cli
- npm
- npm-check-updates
- prettier
- ts-node
- typescript
- yo
