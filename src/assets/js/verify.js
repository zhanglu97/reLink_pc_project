function supplier(rule, value, callback) { //供应商 18位以内汉字、大写字母、字符
    if (!value) {
        return callback(new Error('请输入供应商'));
    } else {
        if (value.length > 18) {
            return callback(new Error('供应商为18位以内汉字、大写字母、字符'));
        }
        callback();
    }
}
function hutchet(rule, value, callback) { //税号 数字开头，数字+大写字母，18位
    if (!value) {
        return callback(new Error('请输入税号'));
    } else {
        const reg = /^[A-Z0-9]{15}$|^[A-Z0-9]{18}$|^[A-Z0-9]{20}$/
        if (reg.test(value)) {
            callback();
        } else {
            return callback(new Error('税号以数字开头，数字+大写字母，18位'));
        }
    }
}
function checkTel(rule, value, callback) { //固定电话
    if (!value) {
        return callback(new Error('请输入电话'));
    } else {
        const reg = /^((0\d{2,3})-)?(\d{7,8})(-(\d{3,4}))?$/
        if (reg.test(value)) {
            callback();
        } else {
            return callback(new Error('请输入正确的固定电话'));
        }
    }
}
function checkPhone(rule, value, callback) { //手机号验证
    if (!value) {
        return callback(new Error('请输入手机号'));
    } else {
        const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
        if (reg.test(value)) {
            callback();
        } else {
            return callback(new Error('请输入正确的手机号'));
        }
    }
}
function bank(rule, value, callback) { //开户行 15字以内汉字
    if (!value) {
        return callback(new Error('请输入开户行'));
    } else {
        const reg = /[\u4e00-\u9fa5]/g
        if (reg.test(value) && value.length < 16) {
            callback();
        } else {
            return callback(new Error('开户行为15字以内汉字'));
        }
    }
}
function bankNum(rule, value, callback) { //联行号 12位数字
    if (!value) {
        return callback(new Error('请输入联行号'));
    } else {
        const reg = /^[0-9]*$/
        if (reg.test(value) && value.length == 12) {
            callback();
        } else {
            return callback(new Error('联行号为12位数字'));
        }
    }
}
function Account(rule, value, callback) { //账户 17以内数字
    if (!value) {
        return callback(new Error('请输入账户'));
    } else {
        const reg = /^[0-9]*$/
        if (reg.test(value) && value.length < 18) {
            callback();
        } else {
            return callback(new Error('账户为17字以内数字'));
        }
    }
}
function Email(rule, value, callback) { //邮箱
    if (!value) {
        return callback(new Error('请输入邮箱'));
    } else {
        const reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
        if (reg.test(value)) {
            callback();
        } else {
            return callback(new Error('请输入正确的邮箱'));
        }
    }
}
function linkMan(rule, value, callback) { //联系人 ≤5个汉字 
    if (!value) {
        return callback(new Error('请输入联系人'));
    } else {
        const reg = /[\u4e00-\u9fa5]/g
        if (reg.test(value) && value.length < 6) {
            callback();
        } else {
            return callback(new Error('联系人为5字以内汉字'));
        }
    }
}

function Name(rule, value, callback) { //联系人 ≤4个汉字 / ≤10字母
    if (!value) {
        return callback(new Error('请输入姓名'));
    } else {
        const reg = /[\u4e00-\u9fa5]/g
        if (reg.test(value) && value.length < 5) {
            callback();
        }else {
            return callback(new Error('请输入正确的姓名'));
        }
    }
}
function idCard(rule, value, callback) {//身份证验证
    if (!value) {
        return callback(new Error('请输入身份证号'));
    } else {
        if (value && (!(/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/).test(value) || (value.length !== 15 && value.length !== 18))) {
            return callback(new Error('请输入正确的身份证号码'))
        } else {
            return callback()
        }
    }

}
function number(rule, value, callback) {
    if (value && (!(/^[+-]?(0|([1-9]\d*))(\.\d+)?$/).test(value))) {
        return callback(new Error('请输入数字，支持小数'))
    } else {
        return callback()
    }
    
}
function userId(rule, value, callback) {
    if (!value) {
        return callback(new Error('请输入账号'));
    } else {
        if (value && (!(/^[0-9a-z]{12}$/).test(value))) {
            return callback(new Error('请输入12位小写英文字母、数字，'))
        } else {
            return callback()
        }
    }
    
}
function password(rule, value, callback) {
    if (!value) {
        return callback(new Error('请输入密码'));
    } else {
        if (value && (!(/^[0-9a-zA-Z]{6,12}$/).test(value))) {
            return callback(new Error('请输入6-12位大小写字母、数字'))
        } else {
            return callback()
        }
    }
    
}
//*************新增品类**********
function CategoryName(rule, value, callback) {    // 品类名称 ≤10个汉字 
    if (!value) {
        return callback(new Error('请输入品类名称'));
    } else {
        const reg = /[\u4e00-\u9fa5]/g
        if (reg.test(value) && value.length < 11) {
            callback();
        } else {
            return callback(new Error('请输入为10字以内汉字'));
        }
    }
}
function CategoryNum(rule, value, callback) {// 前置编码 仅限字母、数字、或组合 
    if (!value) {
        return callback(new Error('请输入前置编码'));
    } else {
        if (value && (!(/^[0-9a-zA-Z]$/).test(value))) {
            return callback(new Error('请输入字母、数字或组合'))
        } else {
            return callback()
        }
    }
    
}
export { //很关键
    supplier, hutchet, checkPhone, checkTel, bank, Email, bankNum, Account, linkMan, idCard, Name, number,userId,password,CategoryName,CategoryNum
}