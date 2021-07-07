<template>
    <div class="AlarmCode">
        <div class="AlarmCode_body">
            <div class="AlarmCode-type">
                <p class="zll-botton"><i class="el-icon-circle-plus-outline"></i> 新增型号</p>
                <div class="name-sort" v-for="(item, index) in wordArr" :key="index"  :class="{'active':cur==index}">
                    <div class="letter">
                        <p>{{item.letter}}</p>
                    </div>
                    <div class="ch-name" ref="wrappercon">
                        <p @click="goWord(item2,index,index2)" :class="{'active2':cur2==index2}" v-for="(item2, index2) in item.content" :key="index2">{{ item2.name }}</p>
                    </div>
                    <div class="clearBoth"></div>
                </div>
            </div>
            <!-- table -->
            <div class="AlarmCode-table">
                <div class="top">
                    <div class="txt">
                        <p>{{ wordMame }}</p>
                    </div>
                    <div class="button">
                        <p class="zll-botton download"> Excel 导入</p>
                        <p class="zll-botton" @click="edit('',0)" ><i class="el-icon-circle-plus-outline"></i> 新增代码项</p>
                    </div>
                    <div class="clearBoth"></div>
                </div>
                <sys-table 
                    :tableData="tableData" 
                    :tableLoading="tableLoading" 
                    :tableHeader="tableHeader"
                    :scopeWidth="120"
                >
                    <template slot-scope="scope" slot="operate">
                        <el-button @click="edit(scope.row,1)" type="text" size="small">编辑</el-button>
                    </template>
                </sys-table>
            </div>
            <div class="clearBoth"></div>
        </div>
        
        <!-- 新增弹框 -->
        <div class="zll-dialog">
            <popout :title="title + '报警代码'" :visible.sync="addDialog" v-if="addDialog" class="minSize">
                <Add ref="add" slot="content" @addForm="getFormData"></Add>
                <template slot="bottom">
                    <p class="zll-botton" @click="()=>{this.$refs.add.setFormData('addForm')}">提 交</p>
                </template>
            </popout>
        </div> 
    </div>
</template>

<script>
    import Add from './Add'
    export default {
        data(){
            return {
                title: '',
                tableLoading:true, //table刷新
                tableData: [{
                    tableNum1: '000',//报警代码
                    tableNum2: 'PLEASE TURN OFF POWER（请关闭电源）',//故障内容
                    tableNum3: 'PMC的X地址未能正确定义。在参数No.3013设定过程中，返回参考点减速挡块信号（*DEC）的X地址未能正确定义',//处理方法
                }, {
                    tableNum1: '001',//报警代码
                    tableNum2: 'X ADDRESS (*DEC) NOT ASSIGNED（未定义X地址）',//故障内容
                    tableNum3: 'PMC的X地址未能正确定义。在参数No.3013设定过程中，返回参考点减速挡块信号（*DEC）的X地址未能正确定义',//处理方法
                }, {
                    tableNum1: '009',//报警代码
                    tableNum2: 'IMPROPER NC ADDRESS（NC地址不对）',//故障内容
                    tableNum3: '指定了不可在NC语句中使用的地址，或者尚未设定参数（No.1020）',//处理方法
                }, {
                    tableNum1: '072',//报警代码
                    tableNum2: 'TOO MANY PROGRAMS（程序太多）',//故障内容
                    tableNum3: '登录的程序数超过200个。请删除不要的程序，再次登录',//处理方法
                }, {
                    tableNum1: '073',//报警代码
                    tableNum2: 'PROGRAM NUMBER ALREADY IN USE（程序号已被使用）',//故障内容
                    tableNum3: '要登录的程序号与已登录的程序号相同。请变更程序号或删除旧的程序号后再次登录',//处理方法
                },],
                tableHeader:[],
                addDialog: false, //用户弹框

                cur:0,
                cur2:0,
                wordMame: '',
                wordArr: [{
                    letter: 'F',
                    content: [{
                        name: '发格',
                    }],
                }, {
                    letter: 'G',
                    content: [{
                        name: '广数',
                    }],
                }, {
                    letter: 'H',
                    content: [{
                        name: '海德汉',
                    }, {
                        name: '华数',
                    }],
                }, {
                    letter: 'L',
                    content: [{
                        name: '力士乐',
                    }],
                }, {
                    letter: 'M',
                    content: [{
                        name: '马扎克',
                    }],
                },  {
                    letter: 'S',
                    content: [{
                        name: '三菱',
                    }],
                }, {
                    letter: 'X',
                    content: [{
                        name: '西门子',
                    }],
                }, ],
            }
        },
        methods: {
             getTableList(){//获取表格数据
                this.tableLoading = true;
                setTimeout(()=>{
                    this.tableHeader =  [
                        {"columnValue": "tableNum1", "columnName": "报警代码", width: 100  },
                        {"columnValue": "tableNum2", "columnName": "故障内容" },
                        {"columnValue": "tableNum3", "columnName": "处理方法" },
                    ]
                    this.tableData = JSON.parse(JSON.stringify(this.tableData))
                    this.tableLoading = false;
                },500)
            },
            getFormData(data){
                console.log(data)
                this.addDialog = false
            },
            edit(val,type){ //编辑
                this.addDialog = true
                if(type == 0) {
                    this.title = '新增'
                }else{
                    this.title = '编辑'
                }
            },
            goWord(val,index,index2) {
                console.log(val)
                this.wordMame = val.name
                this.cur = index
                this.cur2 = index2
            }
        },
        mounted(){
            this.getTableList();//显示table
        },
        components: {
            Add,
        }
    }
</script>

<style lang="scss" scoped>
@import "@/assets/style/SearchTop.scss";
.AlarmCode_body {
    .AlarmCode-type {
        width: 150px;
        float: left;
        .zll-botton {
            width: 100px;
            height: 26px;
            line-height: 26px;
            padding: 0;
            margin-bottom: 15px;
        }
        .name-sort {
            height: 26px;
            line-height: 26px;
            .letter {
                width: 40px;
                float: left;
            }
            .ch-name {
                width: calc(100% - 40px);
                float: left;
                cursor: pointer;
            }
            &.active {
                .active2 {
                    color: #34bfc6;
                }
            }
        }
    }
    .AlarmCode-table {
        width: calc(100% - 150px);
        float: left;
        border-left: 1px solid #e6e6e6;
        padding-left: 10px;
        .top {
            margin-bottom: 15px;
            .txt {
                float: left;
                width: calc(100% - 300px);
                font-size: 14px;
                color: #34bfc6;
            }
            .button {
                float: right;
                width: 300px;
                .zll-botton {
                    width: 100px;
                    float: right;
                    height: 26px;
                    line-height: 26px;
                    padding: 0;
                    margin-left: 15px;
                }
            }
        }
    }
}
</style>