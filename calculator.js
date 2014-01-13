Ext.define("ProgramBurndownCalculator", {
   extend: "Rally.data.lookback.calculator.TimeSeriesCalculator",
   
    pointsOffset : 0,
    countOffset : 0,
   
    getMetrics: function () {
        var metrics = [
          {
            field: "PlanEstimate",
            as: "Scope",
            display: "line",
            f: "sum"
          },
          {
            field: "PlanEstimate",
            as: "Accepted",
            f: "filteredSum",
            filterField : "ScheduleState",
            filterValues : ["Accepted"],
            display : "line"
          },
          {
            field: "TaskEstimateTotal",
            as: "TaskEstimate",
            f: "sum",
            display : "line"
          },
          {
            field: "TaskEstimateRemaining",
            as: "TaskRemaining",
            f: "sum",
            display : "line"
          }
       ];
        return metrics;
    },
    getDerivedFieldsOnInput : function () { 
        // XS 1, S 3, M 5, L 8, XL 13
        return [ 
            // {
            //     as: 'CalcPreliminaryEstimate', 
            //     f:  function(row) {
            //         var r = _.find(app.peRecords, function(rec) { return rec.get("ObjectID") == row.PreliminaryEstimate; });
            //         return r !== undefined ? r.get("Value") : 0;    
            //     }
            // },
        ];
    },
    getDerivedFieldsAfterSummary : function () {
        return [
          //   {as: 'ProjectionPoints', 
          //   f: function (row, index, summaryMetrics, seriesData) {
          //       var that = this;
          //       if (index === 0) {
          //           datesData = _.pluck(seriesData,"label");
          //           var today = new Date();
          //           var li = datesData.length-1;
          //           acceptedPointsData = _.pluck(seriesData,"Accepted Points");
          //           acceptedPointsData = _.filter(acceptedPointsData, function(d,i) { return new Date(Date.parse(datesData[i])) < today; });
                    
          //           // calculate an offset between the projected value and the actual accepted values.
          //           var lastAccepted = acceptedPointsData[acceptedPointsData.length-1];
          //           var lastProjected = linearProject( acceptedPointsData, acceptedPointsData.length-1);
          //           console.log("last accepted:", lastAccepted, "last projected:",lastProjected);
          //           that.pointsOffset = lastAccepted-lastProjected;    
          //       }
          //       var y = linearProject( acceptedPointsData, index) + that.pointsOffset;
          //       return Math.round(y * 100) / 100;
          //   }
          // }, 
        ];
    }
   
});
