<template>
    <div class="BasicData">
        <h2 class="page_title_h2">基础数据</h2>
        <div class="nav_tab">
            <div @click="getshow(1)" :class="{active:shows == 1}" class="MenuList left">品类编码</div>
            <div @click="getshow(2)" :class="{active:shows == 2}" class="MenuList middle">报警代码</div>
            <div @click="getshow(3)" :class="{active:shows == 3}" class="MenuList ">行政区域</div>
            <div @click="getshow(4)" :class="{active:shows == 4}" class="MenuList ">备份通知</div>
            <div @click="getshow(5)" :class="{active:shows == 5}" class="MenuList ">检项</div>
            <div @click="getshow(6)" :class="{active:shows == 6}" class="MenuList ">厂内区位</div>
            <div class="clearBoth"></div>
        </div>
        <div class="BasicData-body">
            <CategoryCoding v-if="shows == 1"></CategoryCoding>
            <AlarmCode v-if="shows == 2"></AlarmCode>
        </div>
    </div>
</template>

<script>
import CategoryCoding from './CategoryCoding/Index'
import AlarmCode from './AlarmCode/Index'
export default {
    data() {
        return {
            shows: 1,
        }
    },
    methods:{
        getshow(val) {
            this.shows = val
        },
    },
    components: {
        CategoryCoding,
        AlarmCode,
    }
};
</script>

<style lang="scss" scoped>
.BasicData {
    margin: 0 auto;
    width: 100%;margin-bottom: 15px;
    border-bottom: 0;
    .MenuList {
        height: 35px;
        line-height: 33px;
        float: left;
        text-align: center;
        width: 150px;
        background: #f7f7f7;
        color: #333;
        font-size: 14px;
        cursor: pointer;
        border-top: 2px solid #f7f7f7;
        border-bottom: 1px solid #e6e6e6;
        &:hover {
            transition: all .3s;
            color: #34BFC6;
            background: #fff;
            border-top: 2px solid #fff;
        }
        &.active {
            color: #34BFC6;
            transition: all .3s;
            background: #fff;
            border-top: 2px solid #34BFC6;
            border-bottom: 1px solid #fff;
        }
        &.middle {
            border-left: 1px solid #e6e6e6;
            border-right: 1px solid #e6e6e6;
        }
        &.left {
            border-left: 1px solid #e6e6e6;
            position: relative;
            &::before {
                content: ' ';
                width: 15px;
                height: 1px;
                background: #e6e6e6;
                position: absolute;
                bottom: -1px;
                left: -15px;
            }
        }
        &.right {
            border-right: 1px solid #e6e6e6;
        }
        
    }
    .BasicData-body {
        padding-top: 15px;
    }
}
</style>