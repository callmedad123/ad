<template>
  <div>
    <el-card>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home/admanage' }">广告管理</el-breadcrumb-item>
        <el-breadcrumb-item>新增</el-breadcrumb-item>
      </el-breadcrumb>

      <el-row>
        <el-col :span="12">
          <p>内容：</p>
          <!-- 上传图片 -->
          <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple
          >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
              将文件拖到此处，或
              <em>点击上传</em>
            </div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
          <div>
            <p>名称：</p>
            <el-input placeholder="请输入名称" v-model="name" clearable></el-input>
          </div>
          <div>
            <p>广告主选择：</p>
            <el-select v-model="value" filterable placeholder="请选择">
              <el-option
                v-for="item in option"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="block">
            <p>群体选择:</p>
            <el-cascader :options="options" :props="props" collapse-tags clearable></el-cascader>
          </div>
        </el-col>
      </el-row>
      <div class="btn">
        <el-button type="success">提交</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      option: [
        {
          value: "选项1",
          label: "小明"
        },
        {
          value: "选项2",
          label: "小红"
        },
        {
          value: "选项3",
          label: "小绿"
        },
        {
          value: "选项4",
          label: "大明"
        },
        {
          value: "选项5",
          label: "李华"
        }
      ],
      value: "",
      props: { multiple: true },
      options: [
        {
          value: 1,
          label: "东南",
          children: [
            {
              value: 2,
              label: "上海",
              children: [
                { value: 3, label: "普陀" },
                { value: 4, label: "黄埔" },
                { value: 5, label: "徐汇" }
              ]
            },
            {
              value: 7,
              label: "江苏",
              children: [
                { value: 8, label: "南京" },
                { value: 9, label: "苏州" },
                { value: 10, label: "无锡" }
              ]
            },
            {
              value: 12,
              label: "浙江",
              children: [
                { value: 13, label: "杭州" },
                { value: 14, label: "宁波" },
                { value: 15, label: "嘉兴" }
              ]
            }
          ]
        },
        {
          value: 17,
          label: "西北",
          children: [
            {
              value: 18,
              label: "陕西",
              children: [
                { value: 19, label: "西安" },
                { value: 20, label: "延安" }
              ]
            },
            {
              value: 21,
              label: "新疆维吾尔族自治区",
              children: [
                { value: 22, label: "乌鲁木齐" },
                { value: 23, label: "克拉玛依" }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.el-breadcrumb {
  font-size: 16px;
}
.el-input {
  width: 60%;
}
.el-button {
  width: 20%;
}
.btn {
  text-align: center;
  margin-top: 20px;
}
</style>