let path = require('path');
let fs = require('fs');
let tmpl = require('./lib/tmpl');
var pkg = require('../package.json');
let sep = path.sep;
let modules = {
    magix: 1, //公用方法及入口
    event: 1, //pubsub
    vframe: 1, //vframe
    body: 1, //dom事件处理模块
    view: 1, //view
    cnum: 1, //Cache num
    ceach: 1, //Cache each
    tipRouter: 1, //切换页面时，如果开发者明确告诉magix数据有改变，则会提示用户
    tipLockUrlRouter: 1, //锁定url功能
    edgeRouter: 1, //使用pushState
    collectView: 1, //收集同一个view中所有的子view并一次性发出请求，在请求combine时有用
    layerVframe: 1, //父子化同一个view中嵌套存在的vframe
    updaterSetState: 1, //updater是否由用户指定更新。即用户指定什么就更新什么，不管值有没有改变
    forceEdgeRouter: 1, //强制使用pushState
    serviceCombine: 1, //接口combine
    partial: 1, //局部刷新
    updater: 1, //自动更新
    viewProtoMixins: 1, //支持mixins
    share: 1, //向子或孙view公开数据
    hasDefaultView: 1, //自动初始化
    autoEndUpdate: 1, //自动识别并结束更新。针对没有tmpl属性的view自动识别并结束更新
    linkage: 1, //vframe上是否带父子间调用的方法，通常在移动端并不需要
    base: 1, //base模块
    style: 1, //是否有样式处理
    viewInit: 1, //init方法
    safeguard: 1, //数据保护
    service: 1, //接口服务
    router: 1, //路由模块
    resource: 1, //资源管理
    configIni: 1, //是否有ini配置文件
    nodeAttachVframe: 1, //节点上挂vframe对象
    mxViewAttr: 1, //支持服务端直出
    viewMerge: 1 //view是否提供merge方法供扩展原型链对象
};

let copyFile = (from, to, callback) => {
    let folders = path.dirname(to).split(sep);
    let p = '';
    while (folders.length) {
        p += folders.shift() + sep;
        if (!fs.existsSync(p)) {
            fs.mkdirSync(p);
        }
    }
    let content = fs.readFileSync(from);
    if (callback) {
        content = callback(content + '');
    }
    fs.writeFileSync(to, content);
};
module.exports = (options) => {
    let root = __dirname;
    let map = {};
    let others = [];
    let enableModules = options.enableModules;
    let loaderType = options.loaderType || 'unknown';
    let tmplFile = options.tmplFile;
    let aimFile = options.aimFile;
    enableModules.split(',').forEach(function(m) {
        m = m.trim();
        if (m == 'core') { //兼容
            map[m] = 1;
            m = 'hasDefaultView';
        }
        map[m] = 1;
    });
    for (let p in modules) {
        if (!map[p]) {
            others.push(p);
        }
    }
    let incReg = new RegExp('Inc\\(\'.+?\\/tmpl\\/(.+)\'\\);?', 'g');
    copyFile(tmplFile, aimFile, function(content) {
        content = content.replace(incReg, function(match, name) {
            if (map[name]) {
                let file = path.resolve(root, '../src/tmpl/' + name + '.js');
                //console.log('file', file);
                return fs.readFileSync(file) + '';
            }
            return '';
        });
        let header = '\/\/#exclude(define,before);\r\n/*!' + pkg.version + ' Licensed MIT*/';
        header += '\r\n/*\r\nauthor:kooboy_li@163.com\r\nloader:' + loaderType;
        header += '\r\nenables:' + enableModules;
        header += '\r\n\r\noptionals:' + others;
        header += '\r\n*/\r\n';
        return tmpl(header + content, map);
    });
};