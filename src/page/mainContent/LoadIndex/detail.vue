<template>
    <div class="addProject UserAdd">
        <div class="addForm zll-form">
            <el-row :gutter="20">
                <el-col :span="10">
                    <div class="formList">
                        <span class="text_left">客户名称：</span>
                        <span class="text_right">上海远大精密股份有限公司</span>
                    </div>
                    <div class="formList">
                        <span class="text_left">授权日期：</span>
                        <span class="text_right">2021-01-01</span>
                    </div>
                    <div class="formList">
                        <span class="text_left">设备名称：</span>
                        <span class="text_right">数控立车</span>
                    </div>
                    <div class="formList">
                        <span class="text_left">型号：</span>
                        <span class="text_right">KDJC60/2C</span>
                    </div>
                    <div class="formList">
                        <span class="text_left">设备码：</span>
                        <span class="text_right">KVDL21030012</span>
                    </div>
                    <div class="formList">
                        <span class="text_left">保修期：</span>
                        <span class="text_right">过保</span>
                    </div>
                    <div class="formList"></div>
                    <div class="formList">
                        <span class="text_left">区位：</span>
                        <span class="text_right">1#车间   机加线</span>
                    </div>
                    <div class="formList">
                        <span class="text_left">本月负荷：</span>
                        <span class="text_right">62.4%</span>
                    </div>
                    <div class="formList">
                        <span class="text_left">报修次数：</span>
                        <span class="text_right">3</span>
                    </div>
                    <div class="formList">
                        <span class="text_left">累计电量：</span>
                        <span class="text_right">566.1<span class="unit">千万/时</span></span>
                        
                    </div>
                </el-col>
                <el-col :span="14">
                    <div class="partment">
                        <div class="part_1 one">
                            <img src="@/assets/img/device_img.png" alt="">
                            <p class="zll-botton run part-nav">运 行</p>
                        </div>
                        <div class="part_1">
                            <div class="formList">
                                <div class="zll-botton run">运行</div>
                                <div class="num">
                                    <span class="run">1133.2</span>
                                    <span class="hours">小时</span>
                                </div>
                            </div>
                            <div class="formList">
                                <div class="zll-botton stop">停机</div>
                                <div class="num">
                                    <span class="stop">46.1</span>
                                    <span class="hours">小时</span>
                                </div>
                            </div>
                            <div class="formList">
                                <div class="zll-botton bj">报警</div>
                                <div class="num">
                                    <span class="bj">12.3</span>
                                    <span class="hours">小时</span>
                                </div>
                            </div>
                            <div class="formList">
                                <div class="zll-botton gj">关机</div>
                                <div class="num">
                                    <span class="gj">8.1</span>
                                    <span class="hours">小时</span>
                                </div>
                            </div>
                        </div>
                        <div class="clearBoth"></div>
                    </div>
                    
                    <div class="tableList">
                        <table border="1">
                            <tr>
                                <td>时间戳</td>
                                <td><p>{{ tableData.table1 }}</p></td>
                            </tr>
                            <tr>
                                <td>程序名</td>
                                <td><p>{{ tableData.table2 }}</p></td>
                            </tr>
                            <tr>
                                <td>当前刀具</td>
                                <td><p>{{ tableData.table3 }}</p></td>
                            </tr>
                            <tr>
                                <td>机械坐标</td>
                                <td><p>{{ tableData.table4 }}</p></td>
                            </tr>
                            <tr>
                                <td>主轴转速</td>
                                <td><p>{{ tableData.table5 }}</p></td>
                            </tr>
                            <tr>
                                <td>主轴倍率</td>
                                <td><p>{{ tableData.table6 }}</p></td>
                            </tr>
                            <tr>
                                <td>主轴负载</td>
                                <td><p>{{ tableData.table7 }}</p></td>
                            </tr>
                            <tr>
                                <td>进给速度</td>
                                <td><p>{{ tableData.table8 }}</p></td>
                            </tr>
                            <tr>
                                <td>进给倍率</td>
                                <td><p>{{ tableData.table9 }}</p></td>
                            </tr>
                        </table>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            tableData: {
                table1: '2020-12-15 13:33:01',
                table2: 'SD18W',
                table3: '钛合金T60铣刀',
                table4: '344.291，-163.722，-327.211',
                table5: '0',
                table6: '60',
                table7: '0',
                table8: '0',
                table9: '70',
            }
        }
    },
    methods: {
        
    },
    mounted(){
        
    },
    components: {
    }
}
</script>
<style lang="scss" scoped>
    @import "@/assets/style/dialog.scss";
    .UserAdd {
        .formList {
            margin-bottom: 10px;
            position: relative;
            overflow: hidden;
            .zll-botton {
                width: 50%;
                margin-bottom: 16px;
                height: 26px;
                line-height: 13px;
                margin-left: 0;
                float: left;
            }
            .unit {
                color: #999999;
                margin-left: 10px;
            }
            .num {
                float: left;
                display: flex;
                width: 50%;
                .hours {
                    color: #999999;
                    margin-left: 10px;
                    width: 30px;
                }
                .run {
                    color: #67C23A;
                    width: calc(100% - 30px);
                    text-align: right;
                }
                .stop {
                    color: #e6a23c;
                    width: calc(100% - 30px);
                    text-align: right;
                }
                .bj {
                    color: #f56c6c;
                    width: calc(100% - 30px);
                    text-align: right;
                }
                .gj {
                    color: #909399;
                    width: calc(100% - 30px);
                    text-align: right;
                }
            }
        }
        .tableList .add_Table {
            .runtxt {
                color: #67C23A;
            }
            .stoptxt {
                color: #e6a23c;
            }
            .bjtxt {
                color: #f56c6c;
            }
            .gjtxt {
                color: #909399;
            }
            .bxzt {
                color: #f44336;
            }
            .state {
                .zll-botton {
                    width: 80%;
                    height: 26px;
                    line-height: 13px;
                }
            }
        } 
        .partment {
            .part_1 {
                width: 50%;
                float: left;
                &.one {
                    padding: 0 20px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    img {
                        height: 110px;
                        width: 140px;
                        margin-bottom: 15px;
                    }
                    .part-nav.zll-botton {
                        height: 26px;
                        line-height: 13px;
                        width: 140px;
                    }
                }
            }
        }
    }
</style>