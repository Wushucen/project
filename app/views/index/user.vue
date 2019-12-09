<template>
  <div class="userinfo">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="昵称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="form.age"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="form.sex">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="公司">
        <el-input v-model="form.company"></el-input>
      </el-form-item>
      <el-form-item label="地址">
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
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
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
        s: '北城街道',
        form: {
          name: '',
          phone:'',
          region: '',
          age:'',
          sex:'',
          company:'',
          
        }
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
      onSubmit() {
        console.log('submit!');
      },
      getData() {
          this.obj = pcas;
      }
    }
  }
</script>

<style lang="less" scoped>
.userinfo{
  width: 860px;
  margin: 10px auto;
}
</style>