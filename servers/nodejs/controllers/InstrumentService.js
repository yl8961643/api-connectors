'use strict';

exports.instrument.get = function(args, res, next) {
  /**
   * parameters expected in the args:
   * symbol (String)
   * filter (String)
   * columns (String)
   * count (BigDecimal)
   * start (BigDecimal)
   * reverse (Boolean)
   * startTime (date)
   * endTime (date)
   **/

var examples = {};
  
  examples['application/json'] = [ {
  "totalVolume" : 1.3579000000000001069366817318950779736042022705078125,
  "symbol" : "aeiou",
  "capped" : true,
  "vwap" : 1.3579000000000001069366817318950779736042022705078125,
  "closingTimestamp" : "2016-07-04T23:25:34.503+0000",
  "typ" : "aeiou",
  "inverseLeg" : "aeiou",
  "reference" : "aeiou",
  "prevTotalTurnover" : 1.3579000000000001069366817318950779736042022705078125,
  "fundingBaseSymbol" : "aeiou",
  "prevPrice24h" : 1.3579000000000001069366817318950779736042022705078125,
  "limit" : 1.3579000000000001069366817318950779736042022705078125,
  "highPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "fairMethod" : "aeiou",
  "taxed" : true,
  "state" : "aeiou",
  "expiry" : "2016-07-04T23:25:34.503+0000",
  "fundingPremiumSymbol" : "aeiou",
  "publishInterval" : "2016-07-04T23:25:34.503+0000",
  "calcInterval" : "2016-07-04T23:25:34.503+0000",
  "lastChangePcnt" : 1.3579000000000001069366817318950779736042022705078125,
  "publishTime" : "2016-07-04T23:25:34.503+0000",
  "askPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "maintMargin" : 1.3579000000000001069366817318950779736042022705078125,
  "takerFee" : 1.3579000000000001069366817318950779736042022705078125,
  "multiplier" : 1.3579000000000001069366817318950779736042022705078125,
  "fairBasis" : 1.3579000000000001069366817318950779736042022705078125,
  "volume24h" : 1.3579000000000001069366817318950779736042022705078125,
  "indicativeTaxRate" : 1.3579000000000001069366817318950779736042022705078125,
  "settlementFee" : 1.3579000000000001069366817318950779736042022705078125,
  "totalTurnover" : 1.3579000000000001069366817318950779736042022705078125,
  "turnover24h" : 1.3579000000000001069366817318950779736042022705078125,
  "underlying" : "aeiou",
  "quoteToSettleMultiplier" : 1.3579000000000001069366817318950779736042022705078125,
  "fairPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "bidPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "fundingQuoteSymbol" : "aeiou",
  "quoteCurrency" : "aeiou",
  "volume" : 1.3579000000000001069366817318950779736042022705078125,
  "impactMidPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "indicativeSettlePrice" : 1.3579000000000001069366817318950779736042022705078125,
  "sellLeg" : "aeiou",
  "settledPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "relistInterval" : "2016-07-04T23:25:34.503+0000",
  "maxOrderQty" : 1.3579000000000001069366817318950779736042022705078125,
  "prevClosePrice" : 1.3579000000000001069366817318950779736042022705078125,
  "maxPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "underlyingToPositionMultiplier" : 1.3579000000000001069366817318950779736042022705078125,
  "hasLiquidity" : true,
  "openInterest" : 1.3579000000000001069366817318950779736042022705078125,
  "settle" : "2016-07-04T23:25:34.503+0000",
  "isQuanto" : true,
  "buyLeg" : "aeiou",
  "rootSymbol" : "aeiou",
  "tickSize" : 1.3579000000000001069366817318950779736042022705078125,
  "markMethod" : "aeiou",
  "markPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "underlyingSymbol" : "aeiou",
  "fundingTimestamp" : "2016-07-04T23:25:34.503+0000",
  "settlCurrency" : "aeiou",
  "makerFee" : 1.3579000000000001069366817318950779736042022705078125,
  "lowPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "underlyingToSettleMultiplier" : 1.3579000000000001069366817318950779736042022705078125,
  "sessionInterval" : "2016-07-04T23:25:34.503+0000",
  "fundingInterval" : "2016-07-04T23:25:34.503+0000",
  "listing" : "2016-07-04T23:25:34.503+0000",
  "indicativeFundingRate" : 1.3579000000000001069366817318950779736042022705078125,
  "bankruptLimitDownPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "turnover" : 1.3579000000000001069366817318950779736042022705078125,
  "positionCurrency" : "aeiou",
  "timestamp" : "2016-07-04T23:25:34.504+0000",
  "impactAskPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "referenceSymbol" : "aeiou",
  "limitDownPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "lastTickDirection" : "aeiou",
  "openValue" : 1.3579000000000001069366817318950779736042022705078125,
  "isInverse" : true,
  "lotSize" : 1.3579000000000001069366817318950779736042022705078125,
  "rebalanceTimestamp" : "2016-07-04T23:25:34.503+0000",
  "openingTimestamp" : "2016-07-04T23:25:34.503+0000",
  "fairBasisRate" : 1.3579000000000001069366817318950779736042022705078125,
  "lastPriceProtected" : 1.3579000000000001069366817318950779736042022705078125,
  "midPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "insuranceFee" : 1.3579000000000001069366817318950779736042022705078125,
  "impactBidPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "prevTotalVolume" : 1.3579000000000001069366817318950779736042022705078125,
  "initMargin" : 1.3579000000000001069366817318950779736042022705078125,
  "limitUpPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "bankruptLimitUpPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "front" : "2016-07-04T23:25:34.503+0000",
  "rebalanceInterval" : "2016-07-04T23:25:34.503+0000",
  "fundingRate" : 1.3579000000000001069366817318950779736042022705078125,
  "lastPrice" : 1.3579000000000001069366817318950779736042022705078125
} ];
  

  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}
exports.instrument.getActive = function(args, res, next) {
  /**
   * parameters expected in the args:
   **/

var examples = {};
  
  examples['application/json'] = [ {
  "totalVolume" : 1.3579000000000001069366817318950779736042022705078125,
  "symbol" : "aeiou",
  "capped" : true,
  "vwap" : 1.3579000000000001069366817318950779736042022705078125,
  "closingTimestamp" : "2016-07-04T23:25:34.510+0000",
  "typ" : "aeiou",
  "inverseLeg" : "aeiou",
  "reference" : "aeiou",
  "prevTotalTurnover" : 1.3579000000000001069366817318950779736042022705078125,
  "fundingBaseSymbol" : "aeiou",
  "prevPrice24h" : 1.3579000000000001069366817318950779736042022705078125,
  "limit" : 1.3579000000000001069366817318950779736042022705078125,
  "highPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "fairMethod" : "aeiou",
  "taxed" : true,
  "state" : "aeiou",
  "expiry" : "2016-07-04T23:25:34.509+0000",
  "fundingPremiumSymbol" : "aeiou",
  "publishInterval" : "2016-07-04T23:25:34.509+0000",
  "calcInterval" : "2016-07-04T23:25:34.509+0000",
  "lastChangePcnt" : 1.3579000000000001069366817318950779736042022705078125,
  "publishTime" : "2016-07-04T23:25:34.509+0000",
  "askPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "maintMargin" : 1.3579000000000001069366817318950779736042022705078125,
  "takerFee" : 1.3579000000000001069366817318950779736042022705078125,
  "multiplier" : 1.3579000000000001069366817318950779736042022705078125,
  "fairBasis" : 1.3579000000000001069366817318950779736042022705078125,
  "volume24h" : 1.3579000000000001069366817318950779736042022705078125,
  "indicativeTaxRate" : 1.3579000000000001069366817318950779736042022705078125,
  "settlementFee" : 1.3579000000000001069366817318950779736042022705078125,
  "totalTurnover" : 1.3579000000000001069366817318950779736042022705078125,
  "turnover24h" : 1.3579000000000001069366817318950779736042022705078125,
  "underlying" : "aeiou",
  "quoteToSettleMultiplier" : 1.3579000000000001069366817318950779736042022705078125,
  "fairPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "bidPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "fundingQuoteSymbol" : "aeiou",
  "quoteCurrency" : "aeiou",
  "volume" : 1.3579000000000001069366817318950779736042022705078125,
  "impactMidPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "indicativeSettlePrice" : 1.3579000000000001069366817318950779736042022705078125,
  "sellLeg" : "aeiou",
  "settledPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "relistInterval" : "2016-07-04T23:25:34.509+0000",
  "maxOrderQty" : 1.3579000000000001069366817318950779736042022705078125,
  "prevClosePrice" : 1.3579000000000001069366817318950779736042022705078125,
  "maxPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "underlyingToPositionMultiplier" : 1.3579000000000001069366817318950779736042022705078125,
  "hasLiquidity" : true,
  "openInterest" : 1.3579000000000001069366817318950779736042022705078125,
  "settle" : "2016-07-04T23:25:34.509+0000",
  "isQuanto" : true,
  "buyLeg" : "aeiou",
  "rootSymbol" : "aeiou",
  "tickSize" : 1.3579000000000001069366817318950779736042022705078125,
  "markMethod" : "aeiou",
  "markPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "underlyingSymbol" : "aeiou",
  "fundingTimestamp" : "2016-07-04T23:25:34.510+0000",
  "settlCurrency" : "aeiou",
  "makerFee" : 1.3579000000000001069366817318950779736042022705078125,
  "lowPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "underlyingToSettleMultiplier" : 1.3579000000000001069366817318950779736042022705078125,
  "sessionInterval" : "2016-07-04T23:25:34.510+0000",
  "fundingInterval" : "2016-07-04T23:25:34.510+0000",
  "listing" : "2016-07-04T23:25:34.509+0000",
  "indicativeFundingRate" : 1.3579000000000001069366817318950779736042022705078125,
  "bankruptLimitDownPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "turnover" : 1.3579000000000001069366817318950779736042022705078125,
  "positionCurrency" : "aeiou",
  "timestamp" : "2016-07-04T23:25:34.510+0000",
  "impactAskPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "referenceSymbol" : "aeiou",
  "limitDownPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "lastTickDirection" : "aeiou",
  "openValue" : 1.3579000000000001069366817318950779736042022705078125,
  "isInverse" : true,
  "lotSize" : 1.3579000000000001069366817318950779736042022705078125,
  "rebalanceTimestamp" : "2016-07-04T23:25:34.510+0000",
  "openingTimestamp" : "2016-07-04T23:25:34.510+0000",
  "fairBasisRate" : 1.3579000000000001069366817318950779736042022705078125,
  "lastPriceProtected" : 1.3579000000000001069366817318950779736042022705078125,
  "midPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "insuranceFee" : 1.3579000000000001069366817318950779736042022705078125,
  "impactBidPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "prevTotalVolume" : 1.3579000000000001069366817318950779736042022705078125,
  "initMargin" : 1.3579000000000001069366817318950779736042022705078125,
  "limitUpPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "bankruptLimitUpPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "front" : "2016-07-04T23:25:34.509+0000",
  "rebalanceInterval" : "2016-07-04T23:25:34.510+0000",
  "fundingRate" : 1.3579000000000001069366817318950779736042022705078125,
  "lastPrice" : 1.3579000000000001069366817318950779736042022705078125
} ];
  

  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}
exports.instrument.getActiveAndIndices = function(args, res, next) {
  /**
   * parameters expected in the args:
   **/

var examples = {};
  
  examples['application/json'] = [ {
  "totalVolume" : 1.3579000000000001069366817318950779736042022705078125,
  "symbol" : "aeiou",
  "capped" : true,
  "vwap" : 1.3579000000000001069366817318950779736042022705078125,
  "closingTimestamp" : "2016-07-04T23:25:34.514+0000",
  "typ" : "aeiou",
  "inverseLeg" : "aeiou",
  "reference" : "aeiou",
  "prevTotalTurnover" : 1.3579000000000001069366817318950779736042022705078125,
  "fundingBaseSymbol" : "aeiou",
  "prevPrice24h" : 1.3579000000000001069366817318950779736042022705078125,
  "limit" : 1.3579000000000001069366817318950779736042022705078125,
  "highPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "fairMethod" : "aeiou",
  "taxed" : true,
  "state" : "aeiou",
  "expiry" : "2016-07-04T23:25:34.514+0000",
  "fundingPremiumSymbol" : "aeiou",
  "publishInterval" : "2016-07-04T23:25:34.514+0000",
  "calcInterval" : "2016-07-04T23:25:34.514+0000",
  "lastChangePcnt" : 1.3579000000000001069366817318950779736042022705078125,
  "publishTime" : "2016-07-04T23:25:34.514+0000",
  "askPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "maintMargin" : 1.3579000000000001069366817318950779736042022705078125,
  "takerFee" : 1.3579000000000001069366817318950779736042022705078125,
  "multiplier" : 1.3579000000000001069366817318950779736042022705078125,
  "fairBasis" : 1.3579000000000001069366817318950779736042022705078125,
  "volume24h" : 1.3579000000000001069366817318950779736042022705078125,
  "indicativeTaxRate" : 1.3579000000000001069366817318950779736042022705078125,
  "settlementFee" : 1.3579000000000001069366817318950779736042022705078125,
  "totalTurnover" : 1.3579000000000001069366817318950779736042022705078125,
  "turnover24h" : 1.3579000000000001069366817318950779736042022705078125,
  "underlying" : "aeiou",
  "quoteToSettleMultiplier" : 1.3579000000000001069366817318950779736042022705078125,
  "fairPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "bidPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "fundingQuoteSymbol" : "aeiou",
  "quoteCurrency" : "aeiou",
  "volume" : 1.3579000000000001069366817318950779736042022705078125,
  "impactMidPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "indicativeSettlePrice" : 1.3579000000000001069366817318950779736042022705078125,
  "sellLeg" : "aeiou",
  "settledPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "relistInterval" : "2016-07-04T23:25:34.514+0000",
  "maxOrderQty" : 1.3579000000000001069366817318950779736042022705078125,
  "prevClosePrice" : 1.3579000000000001069366817318950779736042022705078125,
  "maxPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "underlyingToPositionMultiplier" : 1.3579000000000001069366817318950779736042022705078125,
  "hasLiquidity" : true,
  "openInterest" : 1.3579000000000001069366817318950779736042022705078125,
  "settle" : "2016-07-04T23:25:34.514+0000",
  "isQuanto" : true,
  "buyLeg" : "aeiou",
  "rootSymbol" : "aeiou",
  "tickSize" : 1.3579000000000001069366817318950779736042022705078125,
  "markMethod" : "aeiou",
  "markPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "underlyingSymbol" : "aeiou",
  "fundingTimestamp" : "2016-07-04T23:25:34.514+0000",
  "settlCurrency" : "aeiou",
  "makerFee" : 1.3579000000000001069366817318950779736042022705078125,
  "lowPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "underlyingToSettleMultiplier" : 1.3579000000000001069366817318950779736042022705078125,
  "sessionInterval" : "2016-07-04T23:25:34.514+0000",
  "fundingInterval" : "2016-07-04T23:25:34.514+0000",
  "listing" : "2016-07-04T23:25:34.514+0000",
  "indicativeFundingRate" : 1.3579000000000001069366817318950779736042022705078125,
  "bankruptLimitDownPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "turnover" : 1.3579000000000001069366817318950779736042022705078125,
  "positionCurrency" : "aeiou",
  "timestamp" : "2016-07-04T23:25:34.515+0000",
  "impactAskPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "referenceSymbol" : "aeiou",
  "limitDownPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "lastTickDirection" : "aeiou",
  "openValue" : 1.3579000000000001069366817318950779736042022705078125,
  "isInverse" : true,
  "lotSize" : 1.3579000000000001069366817318950779736042022705078125,
  "rebalanceTimestamp" : "2016-07-04T23:25:34.514+0000",
  "openingTimestamp" : "2016-07-04T23:25:34.514+0000",
  "fairBasisRate" : 1.3579000000000001069366817318950779736042022705078125,
  "lastPriceProtected" : 1.3579000000000001069366817318950779736042022705078125,
  "midPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "insuranceFee" : 1.3579000000000001069366817318950779736042022705078125,
  "impactBidPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "prevTotalVolume" : 1.3579000000000001069366817318950779736042022705078125,
  "initMargin" : 1.3579000000000001069366817318950779736042022705078125,
  "limitUpPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "bankruptLimitUpPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "front" : "2016-07-04T23:25:34.514+0000",
  "rebalanceInterval" : "2016-07-04T23:25:34.514+0000",
  "fundingRate" : 1.3579000000000001069366817318950779736042022705078125,
  "lastPrice" : 1.3579000000000001069366817318950779736042022705078125
} ];
  

  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}
exports.instrument.getActiveIntervals = function(args, res, next) {
  /**
   * parameters expected in the args:
   **/

var examples = {};
  
  examples['application/json'] = {
  "intervals" : [ "aeiou" ],
  "symbols" : [ "aeiou" ]
};
  

  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}
exports.instrument.getIndices = function(args, res, next) {
  /**
   * parameters expected in the args:
   **/

var examples = {};
  
  examples['application/json'] = [ {
  "totalVolume" : 1.3579000000000001069366817318950779736042022705078125,
  "symbol" : "aeiou",
  "capped" : true,
  "vwap" : 1.3579000000000001069366817318950779736042022705078125,
  "closingTimestamp" : "2016-07-04T23:25:34.519+0000",
  "typ" : "aeiou",
  "inverseLeg" : "aeiou",
  "reference" : "aeiou",
  "prevTotalTurnover" : 1.3579000000000001069366817318950779736042022705078125,
  "fundingBaseSymbol" : "aeiou",
  "prevPrice24h" : 1.3579000000000001069366817318950779736042022705078125,
  "limit" : 1.3579000000000001069366817318950779736042022705078125,
  "highPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "fairMethod" : "aeiou",
  "taxed" : true,
  "state" : "aeiou",
  "expiry" : "2016-07-04T23:25:34.519+0000",
  "fundingPremiumSymbol" : "aeiou",
  "publishInterval" : "2016-07-04T23:25:34.519+0000",
  "calcInterval" : "2016-07-04T23:25:34.519+0000",
  "lastChangePcnt" : 1.3579000000000001069366817318950779736042022705078125,
  "publishTime" : "2016-07-04T23:25:34.519+0000",
  "askPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "maintMargin" : 1.3579000000000001069366817318950779736042022705078125,
  "takerFee" : 1.3579000000000001069366817318950779736042022705078125,
  "multiplier" : 1.3579000000000001069366817318950779736042022705078125,
  "fairBasis" : 1.3579000000000001069366817318950779736042022705078125,
  "volume24h" : 1.3579000000000001069366817318950779736042022705078125,
  "indicativeTaxRate" : 1.3579000000000001069366817318950779736042022705078125,
  "settlementFee" : 1.3579000000000001069366817318950779736042022705078125,
  "totalTurnover" : 1.3579000000000001069366817318950779736042022705078125,
  "turnover24h" : 1.3579000000000001069366817318950779736042022705078125,
  "underlying" : "aeiou",
  "quoteToSettleMultiplier" : 1.3579000000000001069366817318950779736042022705078125,
  "fairPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "bidPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "fundingQuoteSymbol" : "aeiou",
  "quoteCurrency" : "aeiou",
  "volume" : 1.3579000000000001069366817318950779736042022705078125,
  "impactMidPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "indicativeSettlePrice" : 1.3579000000000001069366817318950779736042022705078125,
  "sellLeg" : "aeiou",
  "settledPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "relistInterval" : "2016-07-04T23:25:34.519+0000",
  "maxOrderQty" : 1.3579000000000001069366817318950779736042022705078125,
  "prevClosePrice" : 1.3579000000000001069366817318950779736042022705078125,
  "maxPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "underlyingToPositionMultiplier" : 1.3579000000000001069366817318950779736042022705078125,
  "hasLiquidity" : true,
  "openInterest" : 1.3579000000000001069366817318950779736042022705078125,
  "settle" : "2016-07-04T23:25:34.519+0000",
  "isQuanto" : true,
  "buyLeg" : "aeiou",
  "rootSymbol" : "aeiou",
  "tickSize" : 1.3579000000000001069366817318950779736042022705078125,
  "markMethod" : "aeiou",
  "markPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "underlyingSymbol" : "aeiou",
  "fundingTimestamp" : "2016-07-04T23:25:34.519+0000",
  "settlCurrency" : "aeiou",
  "makerFee" : 1.3579000000000001069366817318950779736042022705078125,
  "lowPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "underlyingToSettleMultiplier" : 1.3579000000000001069366817318950779736042022705078125,
  "sessionInterval" : "2016-07-04T23:25:34.519+0000",
  "fundingInterval" : "2016-07-04T23:25:34.519+0000",
  "listing" : "2016-07-04T23:25:34.519+0000",
  "indicativeFundingRate" : 1.3579000000000001069366817318950779736042022705078125,
  "bankruptLimitDownPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "turnover" : 1.3579000000000001069366817318950779736042022705078125,
  "positionCurrency" : "aeiou",
  "timestamp" : "2016-07-04T23:25:34.520+0000",
  "impactAskPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "referenceSymbol" : "aeiou",
  "limitDownPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "lastTickDirection" : "aeiou",
  "openValue" : 1.3579000000000001069366817318950779736042022705078125,
  "isInverse" : true,
  "lotSize" : 1.3579000000000001069366817318950779736042022705078125,
  "rebalanceTimestamp" : "2016-07-04T23:25:34.519+0000",
  "openingTimestamp" : "2016-07-04T23:25:34.519+0000",
  "fairBasisRate" : 1.3579000000000001069366817318950779736042022705078125,
  "lastPriceProtected" : 1.3579000000000001069366817318950779736042022705078125,
  "midPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "insuranceFee" : 1.3579000000000001069366817318950779736042022705078125,
  "impactBidPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "prevTotalVolume" : 1.3579000000000001069366817318950779736042022705078125,
  "initMargin" : 1.3579000000000001069366817318950779736042022705078125,
  "limitUpPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "bankruptLimitUpPrice" : 1.3579000000000001069366817318950779736042022705078125,
  "front" : "2016-07-04T23:25:34.519+0000",
  "rebalanceInterval" : "2016-07-04T23:25:34.519+0000",
  "fundingRate" : 1.3579000000000001069366817318950779736042022705078125,
  "lastPrice" : 1.3579000000000001069366817318950779736042022705078125
} ];
  

  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}