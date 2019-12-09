<template>
  <div>
    <el-table
    style="width: 100%">
      <div class="tab">
        <el-table-column prop="GE" label="网络接口" ></el-table-column>
        <el-table-column prop="Mode" label="模式" ></el-table-column>
        <el-table-column prop="Speed" label="速率"></el-table-column>
        <el-table-column prop="Status" label="连接状态"></el-table-column>
        <el-table-column prop="Getpacket" label="收到的数据包"></el-table-column>
        <el-table-column prop="Sendpacket" label="发送的数据包"></el-table-column>
        <el-table-column prop="Getbyte" label="收到的字节"></el-table-column>
        <el-table-column prop="Sendbyte" label="发送的字节"></el-table-column>
        <el-table-column prop="Rxerrs" label="收到的错误包"></el-table-column>
        <el-table-column prop="Rxdrop" label="丢失的数据包"></el-table-column>
        <el-table-column prop="Rxrate" label="接受速率"></el-table-column>
        <el-table-column prop="Txrate" label="发送速率"></el-table-column>
      </div>
    </el-table>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="less">
.el-table th>.cell {
  position: relative;
  min-width: 120px ;
}
</style>