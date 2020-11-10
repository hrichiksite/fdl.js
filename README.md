# FDLjs
FDLjs is a small javascript library to make firebase dynamic links in JavaScript. As there are no libraries are provided by Google for Firebase Dynamic Links creation, it make a bit difficult to create it with JS, I made this library so that everyone can use FDLs. 

## Very Tiny
![File Size](https://img.shields.io/github/size/hrichiksite/fdljs/links.js?style=for-the-badge)

## Can Work Alone
![No dependencies](https://img.shields.io/badge/Dependencies-0-green?style=for-the-badge)

##

### Fully Made From JS
![Only JS](https://github.com/hrichiksite/fdljs/blob/main/js.PNG)


You can self Host it or use the our Fast CDN



### Install from CDN

```html
<script src="https://getjs.now.sh/libs/hrichiksite/fdljs/links.js"></script>
```

# Docs

### Make FDL
```html
makefdl(key, st, si, sd, domain, link)
```
key = APIkey
<p>
st = Social Title
  <p>
si = Social Image
    <p>
sd = Social Description
      <p>
domain = The Firebase Links domain, for example: someapp.page.link or some custom domain
        <p>
link = The link that you want to shorten

### Make FDL Get Response Back (In case you face any errors)
```html
makedevfdl(key, st, si, sd, domain, link)
```
> Use For Development Only

key = APIkey
<p>
st = Social Title
  <p>
si = Social Image
    <p>
sd = Social Description
      <p>
domain = The Firebase Links domain, for example: someapp.page.link or some custom domain
        <p>
link = The link that you want to shorten

## If you like my code or have used it, please star my repo :smile:
## I :heart: JS
