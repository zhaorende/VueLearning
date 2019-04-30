<template>
  <div>
    <el-button icon="el-icon-more" @click="changeDisplay(true)" circle>添加</el-button>
    <el-dialog title="查询" :visible="visible" @close='onClosed'>
      <el-form :model="student">
        <el-form-item label="姓名">
          <el-input v-model="student.name"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-input v-model="student.sex"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model.number="student.age" type="number"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="changeDisplay(false)">取 消</el-button>
        <el-button type="primary" @click="doConfirm(student)">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'student-list-info',
  props: [
		'student',
		'visible'/* 新增 */
	],
  data () {
    return {
      dialogFormVisible: false
    }
  },
  methods: {
		// 确认按钮
    doConfirm (student) {
      this.$emit('confirm', student)
      this.changeDisplay(false)
    },
		// 修改显示状态
    changeDisplay (value) {
      //this.visible = value
			//this.$emit('switch', value)
			this.$emit('update:visible', value)
    },
		// 对话框关闭事件
    onClosed () {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style scoped>

</style>
