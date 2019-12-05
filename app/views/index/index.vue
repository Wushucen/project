<template>
  <div class="wrap">
    <div class="left">
      <el-tree
        :data="data"
        :props="defaultProps"
        @node-collapse="handleNodecollapse"
        @node-expand="handleNodeexpand"
      >
        <span slot-scope="{ node, data, ele }">
          <i :class="isShowicon"></i>
          {{data.label}}
        </span>
      </el-tree>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowicon: "el-icon-folder",
      data: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1"
                }
              ]
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1"
                }
              ]
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1"
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  watch: {
    
  },
  methods: {
    
    handleNodeexpand(node, data, ele) {
      console.log(node);
      console.log(data);
      console.log(ele);
      if (data.expanded == true) {
        this.isShowicon = "el-icon-folder-opened";
      }
    },
    handleNodecollapse(node, data, ele) {
      console.log(node);
      console.log(data);
      console.log(ele)
      if (data.expanded == false) {
        this.isShowicon = "el-icon-folder";
      }
    }
  }
};
</script>

<style lang="less" scoped>
.wrap {
  width: 100%;
  height: 800px;
  // background-image: url(/images/bed.jpg);
  background-size: cover;
  .box {
    width: 100%;
    height: 50px;
    font-size: 30px;
    color: #fff; //#21DBFF
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
  }
}
</style>