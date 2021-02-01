
'use strict'
 window.Kudos = {
   ...(window.Kudos && typeof(window.Kudos) === 'object') ? window.Kudos : {},
   Widget:function(e){this.uid=e.uid},
   ServerName: `https://statics2.kudobuzz.com/`,
   WidgetServer: 'https://widget.kudobuzz.com/'
  }
window.Kudos.uid= "1093007042bf1d5fbdffbba4bb8d53f118bcad8382973207e27017cd28e704f0b9c50fa6ab30dfb85cd1c3229501620006"
var pageURL = window.location.pathname, kudobuzzWidgetLoad, pageURLUnit = pageURL.split('/'), widgetType = window.Kudos.widgetType, isMobile = window.Kudos.isMobile ? window.Kudos.isMobile : 0, hideNeptune = window.Kudos.hideNeptune ? window.Kudos.hideNeptune : false, isPreview = window.Kudos.isPreview ? window.Kudos.isPreview : false

var SERVER_ADDRESS = window.Kudos.ServerName
var WIDGET_SERVER = window.Kudos.WidgetServer

function waitFor(val, handler) {
  if (val && handler) {
      if (window.wixDevelopersAnalytics) {
          handler()
      } else {
          setTimeout(function() {
              waitFor(val, handler)
          }, 50)
      }
  }
}

function appendScriptTextToHead (js, dataId) {
var head = document.head
var scriptTag = document.createElement('script')
var textNode = document.createTextNode(js)
scriptTag.type = 'text/javascript'
if(dataId) { scriptTag.setAttribute('data-id' , dataId) }
scriptTag.appendChild(textNode)
if(!document.querySelector('[data-id="productReviewFormFxn"]')){
  head.appendChild(scriptTag)
}
}

function createProductPageDiv ({ productId, productTitle }) {
  var bottom = document.querySelector('div[data-hook="bottom-placeholder"]')
  var productDiv = document.createElement('div')
  productId ? productDiv.setAttribute('data-id', productId)
    : productDiv.setAttribute('data-name', productTitle)
  productDiv.setAttribute('id', 'kudobuzz_product_reviews_widget')
  if (elementExists(bottom)) {
    var existingDiv = bottom.querySelector('#kudobuzz_product_reviews_widget')
    replaceOrAppendDiv(bottom, existingDiv, productDiv)
  }
}

function createStarRatingDiv(productId){
  var bottom = document.querySelector('div[data-hook="details-placeholder"]')
  var productDiv = document.createElement('span')
  productDiv.setAttribute('id', productId)
  productDiv.setAttribute('class', 'rateit k_product_rating')
  if (elementExists(bottom)) {
    var existingDiv = bottom.querySelector('.k_product_rating')
    replaceOrAppendDiv(bottom, existingDiv, productDiv)
  }
}

function replaceOrAppendDiv(bottom, existingDiv, productDiv){
  existingDiv
    ? bottom.replaceChild(productDiv, existingDiv)
    : bottom.appendChild(productDiv)
}

function elementExists(element){
  if (element !== null) {
    return true
  }
  return false
}

if (!(typeof kudobuzzWidgetLoad !== 'undefined' || pageURLUnit.indexOf('checkout') >= 0)) {
  pageURL = window.location.href
  var apiEndpoint = WIDGET_SERVER
    , cndUrl = `${SERVER_ADDRESS}`
  kudobuzzWidgetLoad = 0
  var serverWidgetVersion = {
      classic: 1,
      neptune: 1,
      fullPageWall: 1,
      fullPageTile: 1,
      slider: 1,
      productReviewForm: 1,
      badge: 1,
      starRating: 1,
      css: 1
  }, kudobuzzQuery, localStorageVersion
  var productTitleObserver, placeHolderObserver, productWidgetRequest

  function createNeptuneWidget(d, n, t) {
      d.getJSON(n, function(e) {
          e.html = typeof widgetType !== 'undefined' && widgetType === 'fullPage' ? '' : e.html
          if (e.html != '') {
              if (!hideNeptune)
                  d('body').append(e.html);
              (window.Kudos.acc_url = e.acc_url),
              (window.Kudos.accset = e.accset),
              (window.Kudos.acc_id = e.acc_id),
              (window.Kudos.shop = e.shop),
              (window.Kudos.buttonStateColor = e.widgetColor),
              (window.Kudos.widgetColor = e.widgetColor),
              (window.Kudos.textColor = e.textColor),
              (window.Kudos.reviewsPerPage = e.reviewsPerPage),
              (window.Kudos.required = e.required),
              (window.Kudos.thanksForReviewText = e.thanksForReviewText),
              (window.Kudos.transitionSpeed = e.transitionSpeed)
              var t
              e.widgetType === 'neptune' ? (t = 'neptuneFxn') : e.widgetType === 'classic' && ((t = 'classicFxn'),
              d.ajax({
                  url: cndUrl + 'widget_fxns/classicSlidder.min.js',
                  dataType: 'text',
                  async: !0,
                  success: appendScriptTextToHead
              })),
              d.ajax({
                  url: cndUrl + 'widget_fxns/neptuneFxn.min.js?t=123456',
                  dataType: 'text',
                  async: !0,
                  success: function(e) {
                      appendScriptTextToHead(e)
                     
                  }
              })
          }
      })

  }

  function createProductWidget(d, n, t) {

      var i, productName, a = window.document.getElementById('kudobuzz_product_reviews_widget')

      if ((a && ((i = (d('#' + a.id).attr('data-id') || d('#' + a.id).attr('data-product-id'))),
      i ? (window.Kudos.pdt_pg_ecomm = 'pdt_pg') : ((i = window.location.protocol + '//' + window.location.hostname + window.location.pathname),
      (productName = d('#' + a.id).attr('data-name')))),
      (window.Kudos.pdt_id = i),
      a)) {
          var u = apiEndpoint + 'product_review/' + t + '?id=' + i;

          if (productName) u += '&name=' + productName

          productWidgetRequest = d.getJSON(u, function(e) {
              e.html != '' && (d('#kudobuzz_product_reviews_widget').html(e.html),
              (window.Kudos.buttonStateColorpfr = e.widgetColorPRF),
              (window.Kudos.textColorpfr = e.textColorPFR),
              (window.Kudos.reviewsPerPagepfr = e.reviewsPerPagePRF),
              (window.Kudos.shop_platform_domain = e.shop_platform_domain),
              (window.Kudos.platform = e.platform),
              (window.Kudos.payment_plan = e.payment_plan),
              (window.Kudos.metadata = e.metadata),
              (window.Kudos.pdt_id = e.product_id),
              (a.setAttribute('data-id', e.product_id)),
              (void 0 === window.Kudos.acc_url || void 0 === window.Kudos.acc_id) && ((window.Kudos.acc_url = e.acc_url),
              (window.Kudos.accset = e.accset),
              (window.Kudos.acc_id = e.acc_id)))

              var scriptIdentifier = 'productReviewFormFxn'

                d.ajax({
                  url: cndUrl + 'widget_fxns/productReviewFormFxn.min.js?t=1',
                  dataType: 'text',
                  async: !0,
                  success: function(js) {
                    appendScriptTextToHead(js, scriptIdentifier)
                  }
                })
              
          })
      }
  }

  function createRatingWidget(d,n,t, o){
       var _ = d('.k_product_rating')
                    , f = ''
                  if (_.length > 0) {
                      d('.k_product_rating').each(function(e) {
                          f += ',' + d('.k_product_rating').eq(e).attr('id')
                      })
                      var m = f.substring(1)
                      if (m.length > 1) {
                          var z = apiEndpoint + 'star_rating/' + t + o + 'product_ids=' + m
                          
                          d.getJSON(z, function(e) {
                              if (e.html != '') {
                                  var i 
                                  var t = e.html
                                    , o = t.split(',')
                                  
                                  for (i = 0; i < o.length; i++) {
                                      var n = o[i]
                                        , a = n.split('*')
                                      
                                     
                                      a[0] && d('span#' + a[0] + '.k_product_rating').html('<span class="kudobuzz_star_rating_widget_cover">' + a[1] + '</span>')
                                  }
                              }
                          })
                      }
                  }


  }
  
   function onAnalyticsReady() {
          function kudobuzzWixProductEventHandler(eventName, data) {
              if (eventName === 'productPageLoaded') {
                  console.log(eventName)

                  productWidgetRequest && productWidgetRequest.abort()
                  productTitleObserver && productTitleObserver.disconnect()
                  placeHolderObserver && placeHolderObserver.disconnect()

                  window.wixProduct = data.productId
                  createProductPageDiv({ productId: data.productId })
                  createStarRatingDiv(data.productId)

                  var slider = window.Kudos.WIDGET_SERVER + 'on_site/' + window.Kudos.uid
                  createProductWidget(window.kudobuzzQuery, slider, window.Kudos.uid)
                  createRatingWidget(window.kudobuzzQuery, slider, window.Kudos.uid, "?")
              }
          }
          window.wixDevelopersAnalytics.register('k', kudobuzzWixProductEventHandler)
      }
      
  window.addEventListener('wixDevelopersAnalyticsReady', onAnalyticsReady)

  function observeProductTitleElement () {
    var productTitleElement = document.querySelector('[data-hook="product-title"]')
    var widgetPlaceHolder = document.querySelector('div[data-hook="bottom-placeholder"]')

    if(!productTitleElement || !widgetPlaceHolder || window.wixProduct) return 
  
    if(productTitleElement.textContent) {
      createProductPageDiv({ productTitle: productTitleElement.textContent })
      var slider = window.Kudos.WIDGET_SERVER + 'on_site/' + window.Kudos.uid
      createProductWidget(window.kudobuzzQuery, slider, window.Kudos.uid)
      observeBottomPlaceholder ()
    }
    
    
  
    var config = { attributes: true, childList: true, subtree: true }
  
    var callback = function(mutationsList, _) {
    for(var mutation of mutationsList) {
      console.log(mutation.type)
      if (mutation.type === 'attributes') {
        
          var productTitle = productTitleElement.textContent

          if(productTitle) {
            createProductPageDiv({ productTitle })
            var slider = window.Kudos.WIDGET_SERVER + 'on_site/' + window.Kudos.uid
            createProductWidget(window.kudobuzzQuery, slider, window.Kudos.uid)
            observeBottomPlaceholder ()
          }
      }
    }
  }
  
  if(!window.wixProduct) { // an indication if product page event fired while we were about to observe
    productTitleObserver = new MutationObserver(callback)
    productTitleObserver.observe(productTitleElement, config)
  }
}

function observeBottomPlaceholder () {
    var bottomPlaceHolder = document.querySelector('div[data-hook="bottom-placeholder"]')

    if(!bottomPlaceHolder) { console.log('placeholder not found'); return }
  
    var config = { childList: true }
  
    var callback = function(mutationsList, _) {
    for(var mutation of mutationsList) {
      if (mutation.type === 'childList') {
        if(bottomPlaceHolder.querySelector('#kudobuzz_product_reviews_widget')) return

          var productTitle = document.querySelector('[data-hook="product-title"]').textContent
          if(productTitle) {
            createProductPageDiv({ productTitle })
            var slider = window.Kudos.WIDGET_SERVER + 'on_site/' + window.Kudos.uid
            createProductWidget(window.kudobuzzQuery, slider, window.Kudos.uid)
          }
      }
    }
  }
  
  if(!window.wixProduct) { // an indication if product page event fired while we were about to observe
    placeHolderObserver = new MutationObserver(callback)
    placeHolderObserver.observe(bottomPlaceHolder, config)
  }
}

  !(function() {
      'use strict'

      function d() {
          function d() {
              ;(kudobuzzQuery = window.jQuery.noConflict(!0)),
              t()
          }

          function e(d) {
              d('#kudobuzz_product_reviews_widget').show(),
              d('#kudobuzz_fullpage_widget').show(),
              d('#kudobuzz_badge_widget').show(),
              d('#kudobuzz_classic_widget').show(),
              d('#kudobuzz_neptune_widget').show()
          }

          function t() {

              kudobuzzQuery(document).ready(function(d) {
                  d('#kudobuzz_product_reviews_widget').hide(),
                  d('#kudobuzz_fullpage_widget').hide(),
                  d('#kudobuzz_slider_widget').css({
                      opacity: 0
                  }),
                  d('#kudobuzz_badge_widget').hide(),
                  d('#kudobuzz_classic_widget').hide(),
                  d('#kudobuzz_neptune_widget').hide(),
                  d.ajax({
                      url: cndUrl + 'css/kudobuzz_widget_v3.x.min.css?t=1234560099',
                      dataType: 'text',
                      async: !0,
                      success: function(t) {
                          d('<style>' + t + '</style>').appendTo('head'),
                          e(d),
                          localStorage.setItem('cssText', t),
                          localStorage.setItem('widgetVersion', JSON.stringify(serverWidgetVersion))
                      }
                  })
                  var t, o, n
                  window.Kudos.platform === 'tictail' ? ((o = '&'),
                  (t = 'xxxxxxxxx?platform_domain=' + window.Kudos.shop + '&platform=' + window.Kudos.platform),
                  (window.Kudos.extended_url = '?platform_domain=' + window.Kudos.shop + '&platform=' + window.Kudos.platform),
                  (window.Kudos.uid = t),
                  (t += '&')) : ((t = window.Kudos.uid),
                  (window.Kudos.extended_url = ''),
                  (o = '?')),
                  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || isMobile == 1 ? ((n = window.Kudos.platform === 'tictail' ? apiEndpoint + 'on_site/' + t + '&isMobile=true' : apiEndpoint + 'on_site/' + t + '?isMobile=true'),
                  (o = '&'),
                  window.Kudos.platform !== 'tictail' && (o = '?')) : ((n = apiEndpoint + 'on_site/' + t),
                  (o = '?'))


                  createNeptuneWidget(d, n, t)

                  var s = window.document.getElementById('kudobuzz_slider_widget')
                  if (s) {
                      var r = apiEndpoint + 'slider/' + t
                      r += isPreview ? '?isPreview=1' : ''

                      d.getJSON(r, function(e) {
                          if (e.html != '') {
                              ;(window.Kudos.transitionSpeed = e.transitionSpeed),
                              (void 0 === window.Kudos.acc_url || void 0 === window.Kudos.acc_id) && ((window.Kudos.acc_url = e.acc_url),
                              (window.Kudos.accset = e.accset),
                              (window.Kudos.acc_id = e.acc_id)),
                              d('#kudobuzz_slider_widget').append(e.html)
                              var t = document.createElement('script');
                              (t.type = 'text/javascript'),
                              (t.src = cndUrl + 'js/kbzslider.min.js'),
                              d('head').append(t),
                              d.ajax({
                                  url: cndUrl + 'widget_fxns/sliderFxn.min.js',
                                  dataType: 'text',
                                  async: !0,
                                  success:appendScriptTextToHead
                              })
                          }
                      })
                  }



                  var c = window.document.getElementById('kudobuzz_fullpage_widget')
                    , w = window.document.getElementById('kudobuzz-fullpage-widget')
                  if (c || w) {
                      var p = apiEndpoint + 'full_page/' + t
                      d.getJSON(p, function(e) {
                          if (e.html != '') {
                              ;(window.Kudos.reviewsPerPageFp = e.reviewsPerPage),
                              (window.Kudos.textColorFp = e.textColor),
                              (window.Kudos.backgroundColourFp = e.backgroundColour),
                              (window.Kudos.widgetColorFp = e.widgetColor)
                              var t;
                              (void 0 === window.Kudos.acc_url || void 0 === window.Kudos.acc_id) && ((window.Kudos.acc_url = e.acc_url),
                              (window.Kudos.accset = e.accset),
                              (window.Kudos.acc_id = e.acc_id)),
                              e.widgetType === 'wall' ? (t = 'fullPageWallFxn') : (e.widgetType === 'tile' || e.widgetType === 'list') && (t = 'fullPageTileFxn'),
                              d.ajax({
                                  url: cndUrl + 'widget_fxns/' + t + '.min.js',
                                  dataType: 'text',
                                  async: !0,
                                  success: appendScriptTextToHead
                              }),
                              w ? d('#kudobuzz-fullpage-widget').append('<div id="kudobuzz_fullpage_widget">' + e.html + '</div>') : d('#kudobuzz_fullpage_widget').append(e.html)
                          }
                      })
                  }
                  var l = window.document.getElementById('kudobuzz_badge_widget')
                  if (l) {
                      var g = apiEndpoint + 'badge/' + t
                      d.getJSON(g, function(e) {
                          e.html != '' && d('#kudobuzz_badge_widget').append(e.html)
                      })
                  }

                  setTimeout(observeProductTitleElement, 3000)
              })
          }
          var o = document.createElement('script')
          o.setAttribute('type', 'text/javascript'),
          o.setAttribute('src', cndUrl + 'js/jquery-1.10.2.min.js'),
          o.readyState ? (o.onreadystatechange = function() {
              ;(this.readyState == 'complete' || this.readyState == 'loaded') && d()
          }
          ) : (o.onload = d),
          (document.getElementsByTagName('head')[0] || document.documentElement).appendChild(o)
      }
      location.protocol,
      d()
  }
  )()
}
