# Quickstart descartes

## Nutshell

```shell
npm install vuex@next --save
npm install vuex@next --save

# spin up multiple new apps
for elioName in "bach" "mozart"
  set elioGroup elioenlightenment
  set elioName mee
  npm init vite-app $elioName
  cd $elioName
  yo thing --elioGroup $elioGroup --elioName $elioName

  npm i --save vuex
  npm i --save-dev @elioway/sins @elioway/veux-flesh prettier

  git init
  git checkout -b main
  git add .
  git commit -m "hatched"
  git remote add origin "git@gitlab.com:$elioGroup/$elioName.git"
  git push --set-upstream origin main
  cd ..
end
```
