/**
 * 621. 任务调度器
 * https://leetcode-cn.com/problems/task-scheduler/
 */
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    //计算任务的种类及个数
    const obj = {};
    for (let index = 0; index < tasks.length; index++) {
        const task = tasks[index];
        if (!obj[task]) {
            obj[task] = 1;
        } else {
            obj[task] += 1;
        }
    }

    let result = [];

    //每次挑选前n+1个任务在一轮里执行，任务种类不够n+1则全部执行,并存储执行结果
    while (true) {
        const len = Object.keys(obj).length;
        if(!len){
            break;
        }

        //前n+1个大的值减一
        if (len < (n + 1)) {
            for (let key in obj) {
                obj[key] -= 1;
                result.push(key);
            }
            for (let index = 0; index < ((n + 1)-len); index++) {
                result.push(null);              
            }   
        } else {
            //找到前k个多的属性值减一
            const keyArr = Object.entries(obj).sort((a, b) => b[1] - a[1]).slice(0, n+1);
            keyArr.forEach(([key, value]) => {
                obj[key] = value - 1;
                result.push(key);
            })
        }

        //删除值为0的属性更新obj
        for (let key in obj) {
            if (obj[key] === 0) {
                delete obj[key];
            }
        }
    }

    //去掉result最后的空闲时间
    while(result[result.length-1] === null){
        result.pop();
    }

    return result.length;
};

let tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"];
let n = 2;

console.log(leastInterval(tasks, n));
