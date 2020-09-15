<template>
  <el-dialog :title="info.isAdd ? '添加角色':'修改角色'"  :visible.sync="info.isShow"   width="40%">
    <!-- 表单 -->
    <el-form :model="forminfo" ref="form" :rules="rules" label-width="140px">
        <el-form-item label="角色名称" prop="rolename">
            <el-input v-model="forminfo.rolename" placeholder="请输入角色名称"></el-input>
        </el-form-item>
        <el-form-item label="角色权限">
            <el-tree default-expand-all node-key="id" ref="tree" :data="menulist" show-checkbox :props="{children:'children',label:'title'}"></el-tree>
        </el-form-item>
        <el-form-item label="角色状态">
            <el-switch v-model="forminfo.status" :active-value="1" :inactive-value="2"></el-switch>
        </el-form-item>
        <el-form-item label="">
            <el-button type="primary" @click="submit">提交</el-button>
            <el-button type="warning" @click="reset">重置</el-button>
        </el-form-item>
    </el-form>
</el-dialog>
</template>
<script>
// 导入  添加和修改的 请求封装方法！
import { roleAdd,roleEdit } from "@/request/role"
import { mapGetters,mapActions } from "vuex"
let defaultItem = {
    rolename:"",
    menus:"",
    status:1    // 状态1正常2禁用
}
let resetItem = {...defaultItem}
export default {
    props:{
        info:{
            type:Object,
            default(){
                return {
                    isAdd:true,
                    isShow:false
                }
            }
        }
    },
    data(){
        return{
            forminfo:{...defaultItem},
            rules:{  // 验证规则对象！
                rolename:[{required:true,message:"必填！",trigger:'blur'}],
            }
        }
    },
    computed: {
        ...mapGetters({
            menulist:"menu/menulist"
        })
    },
    mounted() {
        if(!this.menulist.length){
            this.get_menu_list();
        }
    },
    methods:{
        ...mapActions({
            get_menu_list:"menu/get_menu_list"
        }),
        setinfo(val){  // 将数据赋给默认defaultItem; 赋给表单
            defaultItem = {...val};
            this.forminfo = {...val};
            console.log(this.forminfo)
        },
        async submit(){
            //获取树形控件选中的节点
            let idarr = this.$refs.tree.getCheckedKeys().concat(this.$refs.tree.getHalfCheckedKeys());
            // 表单验证！
            this.$refs.form.validate(async valid=>{
                if(valid){ // 如果验证通过！
                    let res;
                    if(this.info.isAdd){ // 添加还是修改！
                        res = await roleAdd(this.forminfo);
                    }else{
                        res = await roleEdit(this.forminfo)
                        console.log(this.forminfo)
                    }
                    if(res.code==200){
                        this.$message.success(res.msg)
                        this.info.isShow = false;
                        this.get_menu_list();  // 再次获取列表，让仓库里面的数据是最新的！
                        this.forminfo = {...resetItem}  // 无论是修改成功还是添加成功，都应该让表单为空！
                    }else{
                        this.$message.error(res.msg)
                    }
                }
            })
        },
        reset(){
            // this.setinfo({...defaultItem})
            this.forminfo = {...defaultItem}
        }
    },
    components:{}
}
</script>
<style scoped>
</style>