<template>
  <div v-if="Object.keys(obj).length != 0">
		<el-select v-model="p" placeholder="请选择">
			<el-option
				v-for="(v, k) in obj"
				:key="k"
				:label="k"
				:value="k">
			</el-option>
		</el-select>
		<el-select v-model="c" placeholder="请选择">
			<el-option
				v-for="(v, k) in obj[p]"
				:key="k"
				:label="k"
				:value="k">
			</el-option>
		</el-select>
		<el-select v-model="a" placeholder="请选择">
			<el-option
				v-for="(v, k) in obj[p][c]"
				:key="k"
				:label="k"
				:value="k">
			</el-option>
		</el-select>
		<el-select v-model="s" placeholder="请选择">
			<el-option
				v-for="item in obj[p][c][a]"
				:key="item"
				:label="item"
				:value="item">
			</el-option>
		</el-select>
  </div>
</template>

<script>
	import pcas from '../../../static/pcas.json';
  export default {
    data() {
      return {
        obj: {},
				p: '黑龙江省',
				c: '绥化市',
				a: '青冈县',
				s: '北城街道'
      }
    },
    watch: {
			// 当省变化了，必须让c变为省会城市。为了防止四个直辖市之前切换“市辖区”没有引发切换，所以把a也换一下
			p(v){
				this.c = Object.keys(this.obj[v])[0];
				this.a = Object.keys(this.obj[v][this.c])[0];
			},
			// 当c变化，a就要变化
			c(v){
				this.a = Object.keys(this.obj[this.p][v])[0];
			},
			// 当a变化s就要变化
			a(v){
				this.s = this.obj[this.p][this.c][v][0];
			}
    },
    mounted() {
      this.getData();
    },
    methods: {
      getData() {
          this.obj = pcas;
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>