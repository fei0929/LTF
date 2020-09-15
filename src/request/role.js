import $axios from "@/common/http"   //导入封装好的axios

//获取角色列表
export async function roleList(){
    let res = await $axios.get("/rolelist")
    if(res.code==200 && res.list){
        return res.list
    }else{
        return [];
    }
}

//添加角色   data是添加的数据
export  function roleAdd(data){
    return $axios.post("/roleadd",data)

}

//修改角色
export function roleEdit(data){
    return $axios.post("/roleedit",data)
}

//删除 角色
export function roleDel(id){
   return $axios.post("/roledelete ",{id})
}