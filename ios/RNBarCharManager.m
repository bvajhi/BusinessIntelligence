//
//  RNBarCharManager.m
//  BusinessIntelligence
//
//  Created by Bilal Vajhi on 2/13/22.
//

#import <Foundation/Foundation.h>
#import <React/RCTViewManager.h>
#import "BusinessIntelligence-Swift.h"

@interface RNChartManager: RCTViewManager
@end

@implementation RNChartManager
RCT_EXPORT_MODULE(RNChartView)

- (UIView *) view {
  RNBarChartView *view = [[RNBarChartView alloc] init];
  return view;
}

RCT_EXPORT_VIEW_PROPERTY(xValues, NSArray)
RCT_EXPORT_VIEW_PROPERTY(yValues, NSArray)

@end
