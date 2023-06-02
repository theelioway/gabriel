# Quickstart descartes

## Nutshell

```shell
npm install -g @vue/cli


# spin up multiple new apps
for elioName in "bach" "mozart"
  set elioGroup elioenlightenment
  set elioName mee
  npm init vite-app $elioName
  cd $elioName
  yo thing --elioGroup $elioGroup --elioName $elioName

  vue create $elioName

  git init
  git checkout -b main
  git add .
  git commit -m "hatched"
  git remote add origin "git@gitlab.com:$elioGroup/$elioName.git"
  git push --set-upstream origin main
  cd ..
end
```
