<template>
  <div class="hello">
    <br />
    <h1>{{ title_1 }}</h1>
    <h1>{{ title_2 }}</h1>
    <img src="../img/mservice.jpg" style="height:300px" />
    <!--section data-v-792738cd="" class="bd-masthead pt-3 pt-sm-5 pb-2"><article data-v-792738cd="" class="container"><div data-v-792738cd="" class="row mb-2 mb-md-3 mb-lg-4 no-gutters align-items-center"><aside data-v-792738cd="" class="logo-aside mb-4 mb-md-0 col-md-4 order-md-2 col-12"><svg data-v-10aac690="" data-v-792738cd="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200" version="1.1" shape-rendering="geometricPrecision" fill-rule="evenodd" clip-rule="evenodd" preserveAspectRatio="xMidYMid meet" role="img" focusable="false" class="bv-logo"><title data-v-10aac690="">BootstrapVue Logo</title> <defs data-v-10aac690=""><filter data-v-10aac690="" id="logo-shadow" filterUnits="objectBoundingBox" x="-50%" y="-50%" width="200%" height="200%"><feOffset data-v-10aac690="" in="SourceAlpha" dx="-10" dy="25" result="ALPHA1"></feOffset> <feMorphology data-v-10aac690="" in="ALPHA1" operator="dilate" radius="15" result="ALPHA"></feMorphology> <feGaussianBlur data-v-10aac690="" in="ALPHA" stdDeviation="20" result="DROP"></feGaussianBlur> <feFlood data-v-10aac690="" in="DROP" flood-color="#333" result="SOLID"></feFlood> <feComposite data-v-10aac690="" in="DROP" in2="SOLID" operator="in" result="SHADOW1"></feComposite> <feComponentTransfer data-v-10aac690="" in="SHADOW1" result="SHADOW"><feFuncA data-v-10aac690="" type="linear" slope="0.55"></feFuncA></feComponentTransfer> <feMerge data-v-10aac690=""><feMergeNode data-v-10aac690="" in="SHADOW"></feMergeNode> <feMergeNode data-v-10aac690="" in="SourceGraphic"></feMergeNode></feMerge></filter></defs> <g data-v-10aac690=""><g data-v-10aac690="" filter="url(#logo-shadow)" class="logo-dark-v"><path data-v-10aac690="" fill="#34495E" d="M747 311L602 562 458 311H227l375 651 376-651z"></path></g> <g data-v-10aac690="" filter="url(#logo-shadow)" class="logo-purple-v"><path data-v-10aac690="" fill="#563D7C" fill-rule="nonzero" d="M219 195h762L599 857z"></path> <path data-v-10aac690="" fill="#ffffff" d="M501 282l132 0c25,0 44,5 59,16 15,12 22,28 22,51 0,14 -3,26 -10,35 -7,10 -16,18 -29,23l0 1c17,3 30,11 38,24 9,12 13,27 13,46 0,11 -2,21 -6,30 -3,9 -9,17 -17,24 -9,6 -19,12 -32,16 -12,4 -28,6 -45,6l-125 0 0 -272 0 0zm48 114l77 0c12,0 21,-4 29,-10 8,-7 11,-16 11,-28 0,-14 -3,-24 -10,-29 -7,-6 -17,-9 -30,-9l-77 0 0 76 0 0zm0 119l84 0c14,0 26,-4 33,-11 8,-8 13,-19 13,-32 0,-14 -4,-24 -13,-31 -8,-8 -19,-11 -33,-11l-84 0 0 85z" class="logo-white-b"></path></g> <g data-v-10aac690="" filter="url(#logo-shadow)" class="logo-green-v"><path data-v-10aac690="" fill="#41B883" d="M839 357L600 771 361 357H202l398 690 398-690z"></path></g></g></svg></aside> <header data-v-792738cd="" class="col-md-8 order-md-1 col-12"><h1 data-v-792738cd="" class="mb-3 text-center text-md-left bd-text-purple-bright">
            Bootstrap<span data-v-792738cd="" class="text-vue-green">Vue</span></h1> <p data-v-792738cd="" class="lead">
            With <span data-v-792738cd="" class="font-weight-bolder">BootstrapVue</span> you can build responsive,
            mobile-first, and ARIA accessible projects on the web using
            <span data-v-792738cd="" class="text-muted font-weight-bolder">Vue.js</span> and the world's most popular
            front-end CSS library —
            <span data-v-792738cd="" class="text-muted font-weight-bolder">Bootstrap v4</span>.
          </p> <div data-v-792738cd="" class="media my-3"><div data-v-792738cd="" class="media-aside align-self-center"><svg data-v-792738cd="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612" width="30px" height="30px" focusable="false" role="img"><title data-v-792738cd="">Bootstrap logo</title> <path data-v-792738cd="" fill="#563D7C" d="M612 510c0 56.1-45.9 102-102 102H102C45.9 612 0 566.1 0 510V102C0 45.9 45.9 0 102 0h408c56.1 0 102 45.9 102 102v408z"></path> <path data-v-792738cd="" fill="#FFF" d="M166.3 133h173.5c32 0 57.7 7.3 77 22s29 36.8 29 66.5c0 18-4.4 33.4-13.2 46.2-8.8 12.8-21.4 22.8-37.8 29.8v1c22 4.7 38.7 15.1 50 31.2 11.3 16.2 17 36.4 17 60.8 0 14-2.5 27.1-7.5 39.2-5 12.2-12.8 22.7-23.5 31.5s-24.3 15.8-41 21-36.5 7.8-59.5 7.8h-164V133zm62.5 149.5h102c15 0 27.5-4.2 37.5-12.8s15-20.8 15-36.8c0-18-4.5-30.7-13.5-38s-22-11-39-11h-102v98.6zm0 156.5h110.5c19 0 33.8-4.9 44.2-14.8 10.5-9.8 15.8-23.8 15.8-41.8 0-17.7-5.2-31.2-15.8-40.8s-25.2-14.2-44.2-14.2H228.8V439z"></path></svg></div> <div data-v-792738cd="" class="media-body ml-3 text-muted align-self-center"><a data-v-792738cd="" href="https://getbootstrap.com/docs/4.5" target="_blank">Bootstrap v4</a> is the world's most popular
              framework for building responsive, mobile-first sites.
            </div></div> <div data-v-792738cd="" class="media mb-4"><div data-v-792738cd="" class="media-aside align-self-center"><svg data-v-792738cd="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 196.32 170.02" width="30px" height="30px" focusable="false" role="img" class="media-vue-logo"><title data-v-792738cd="">Vue.js logo</title> <path data-v-792738cd="" fill="#42b883" d="M120.83 0L98.16 39.26 75.49 0H0l98.16 170.02L196.32 0h-75.49z"></path> <path data-v-792738cd="" fill="#35495e" d="M120.83 0L98.16 39.26 75.49 0H39.26l58.9 102.01L157.06 0h-36.23z"></path></svg></div> <div data-v-792738cd="" class="media-body ml-3 text-muted align-self-center"><a data-v-792738cd="" href="https://vuejs.org" target="_blank">Vue.js</a>
              (pronounced <span data-v-792738cd="" class="text-nowrap">/<i data-v-792738cd="">vjuː</i>/</span>, like view)
              is a progressive framework for building user interfaces.
            </div></div></header></div> <p data-v-792738cd="" class="mb-0 text-muted text-center mb-n4 mb-md-n5">
        Current Version<br data-v-792738cd=""> <a data-v-792738cd="" href="/docs/reference/changelog" class="small" target="_self">v2.21.2</a></p></article>
    </section-->
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      title_1: `NodeJS 마이크로서비스`,
      title_2: `VueJS 게시판`,
      msg: ``
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
