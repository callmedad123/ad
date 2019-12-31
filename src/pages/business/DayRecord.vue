<template>
  <div>
    <el-card>
      <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/home/statistical' }">投放统计</el-breadcrumb-item>
  <el-breadcrumb-item>xx日投放量</el-breadcrumb-item>
  
</el-breadcrumb>
      <Charts :id="'dayRecord'" :data="option"></Charts>
    </el-card>
  </div>
</template>

<script>
import Charts from "../../components/Charts";
export default {
  data() {
    return {
      option: {
        title: {
          text: "日投放量"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross"
          }
        },
        toolbox: {
          show: true,
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "00:00",
            "01:15",
            "02:30",
            "03:45",
            "05:00",
            "06:15",
            "07:30",
            "08:45",
            "10:00",
            "11:15",
            "12:30",
            "13:45",
            "15:00",
            "16:15",
            "17:30",
            "18:45",
            "20:00",
            "21:15",
            "22:30",
            "23:45"
          ]
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value} 次"
          },
          axisPointer: {
            snap: true
          }
        },
        visualMap: {
          show: false,
          dimension: 0,
          pieces: [
            {
              lte: 6,
              color: "green"
            },
            {
              gt: 6,
              lte: 8,
              color: "red"
            },
            {
              gt: 8,
              lte: 14,
              color: "green"
            },
            {
              gt: 14,
              lte: 17,
              color: "red"
            },
            {
              gt: 17,
              color: "green"
            }
          ]
        },
        series: [
          {
            name: "投放量",
            type: "line",
            smooth: true,
            data: [
              100,
              280,
              250,
              260,
              270,
              300,
              550,
              500,
              400,
              390,
              380,
              390,
              400,
              500,
              600,
              750,
              800,
              700,
              600,
              400
            ],
            markArea: {
              data: [
                [
                  {
                    name: "早高峰",
                    xAxis: "07:30"
                  },
                  {
                    xAxis: "10:00"
                  }
                ],
                [
                  {
                    name: "晚高峰",
                    xAxis: "17:30"
                  },
                  {
                    xAxis: "21:15"
                  }
                ]
              ]
            }
          }
        ]
      }
    };
  },
  components: {
    Charts
  }
};
</script>

<style lang="less" scoped>
#dayRecord {
  width: 100%;
  height: 400px;
}
.el-breadcrumb{
  font-size: 16px;
  margin-bottom: 30px;
}
</style>