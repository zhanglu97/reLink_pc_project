<template>
    <div class="addProject ServiceCenterAdd">
        <div class="addForm zll-form fw">
            <div class="tag">
                <div class="formList">
                    <span class="text_left">服务单</span>
                    <span class="text_right">F2103120092</span>
                </div>
            </div>
            <el-row :gutter="20">
                <el-col :span="8">
                    <div class="formList">
                        <span class="text_left">客户名称：</span>
                        <span class="text_right">上海远大精密股份有限公司</span>
                    </div>
                    <div class="formList">
                        <span class="text_left">设备名称：</span>
                        <span class="text_right">车削加工中心</span>
                    </div>
                    <div class="formList">
                        <span class="text_left">设备型号：</span>
                        <span class="text_right">KDVL320H</span>
                    </div>
                    <div class="formList">
                        <span class="text_left">问题描述：</span>
                        <span class="text_right">导轨行进1/3不导轨行进1/3不导轨行进1/3不</span>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="formList">
                        <span class="text_left">类别：</span>
                        <span class="text_right">故障</span>
                    </div>
                    <div class="formList">
                        <span class="text_left">发起日期：</span>
                        <span class="text_right">2021-03-12 14:22</span>
                    </div>
                    <div class="formList">
                        <span class="text_left">联系人：</span>
                        <span class="text_right">何大来</span>
                    </div>
                    <div class="formList">
                        <span class="text_left">手机号：</span>
                        <span class="text_right">13004001230</span>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="formList">
                        <span class="text_left">发起时间：</span>
                        <span class="text_right">2021-03-12 14:22</span>
                    </div>
                    <div class="formList">
                        <span class="text_left">接收时间：</span>
                        <span class="text_right">2021-03-12 14:49</span>
                    </div>
                    <div class="formList">
                        <span class="text_left">结束时间：</span>
                        <span class="text_right">2021-03-15 15:37</span>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="zll-timeline">
            <el-timeline :reverse="reverse">
                <el-timeline-item v-for="(activity, index) in activities" :key="index" :timestamp="activity.timestamp">
                    {{activity.content}}
                </el-timeline-item>
            </el-timeline>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            activities: [{
                content: '你的服务已接收【 工程师：陶开军，手机：13305213313 】，他会尽快与您联系，请稍等。',
                timestamp: '2021-03-15 15:55'
            }, {
                content: '客户发起 F2103120092 服务需求',
                timestamp: '2021-03-15 15:37'
            },]
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
    .ServiceCenterAdd {
        margin: 10px 15px;
        .fw {
            border: 1px solid #ccc;
            padding-top: 25px;
            position: relative;
            .tag {
                position:absolute;
                width: 200px;
                top: -16px;
                left: 20px;
                z-index: 11111;
                background: #ffff;
                .formList {
                    margin-bottom: 0;
                    font-size: 14px;
                    .text_left {
                        font-size: 14px;
                        position: relative;
                        &::before {
                            content: " ";
                            width: 10px;
                            height: 10px;
                            background: #e91e63;
                            position: absolute;
                            top: 10px;
                            left: 18px;
                        }
                    }
                    .text_right {
                        color: #e91e63;
                        font-weight: 600;
                        text-align: center;
                    }
                }
            }
        }
        .zll-timeline {
            padding-top: 15px;
        }
    }
</style>