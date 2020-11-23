import axios from "axios";
import qs from "qs"; //处理参数
import router from '../router'; //引入路由
import { Loading , Message} from 'element-ui';

let loading = null;

//开始加载动画
function openLoading(){
    loading = Loading.service({
        lock:true,
        text:'拼命加载中...',
        background:'rgba(0,0,0,.7)'
    });
}

//关闭加载动画
function closeLoading(){
    loading.close();
}

//添加请求拦截器
axios.interceptors.request.use(
    config => {
        //加载动画
        openLoading()
        if(localStorage.token){ //如果我的sessionId存在(sessionId其实就是token)
            // 设置统一的请求header
            config.headers.Authorization = localStorage.token //授权（每次请求把sessionId带给后台）
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

//添加响应拦截器
axios.interceptors.response.use(
    response => {
        let code = Number(response.data.code);
        //逻辑处理
        if(code === 401){ //后端反回的状态值，本应该errorCode是status
            Message({
                type:'warning',
                duration:1500,
                showClose: true,
                message:'当前登录已失效，请从新登录！'
            })
            //清空token
            localStorage.removeItem('token');
            // router.push("/enter").catch(res=>{
            //     console.log("push登录页catch");
            //     console.log(res);
            //     Message({
            //         type:'warning',
            //         duration:1500,
            //         showClose: true,
            //         message:'登陆跳转出错'+response.data.message
            //     })
            // })
            //让用户从新回到登录页面
        }else if(code < 199 && code >= 400 &&code !== 401){
            Message({
                type: 'error',
                message: response.data.message
            });
        }
        return response;
    },
    error => {
        closeLoading() //请求超时清除加载动画
        return Promise.resolve(error.response);
    }
);


// axios.defaults.baseURL = "http://10.26.41.181:8081/nei";    // 开发
axios.defaults.baseURL = "http://localhost:8181";    // 开发

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.timeout = 6000; //设置请求超时时间

function checkStatus(response) {
    return new Promise((resolve, reject) => {
        if(response && (response.status === 200 || response.status === 304 || response.status === 400)){
            try{
                closeLoading() //关闭加载动画
            }catch(e){
                //抛出异常
                console.log(e)
            }
            resolve(response.data);
        }else{
            try{
                closeLoading() //关闭加载动画
            }catch(e){
                //抛出异常
                console.log(e)
            }
            Message({
                type:'error',
                showClose: true,
                message:'网络异常，请检查网络连接是否正常！'
            })
            if(!localStorage.token){
                console.log("!localStorage.token")
                console.log(response)
                router.push("/enter").catch(res=>{
                    console.log("push登录页catch");
                    console.log(res);
                    console.log(response)
                    Message({
                        type:'warning',
                        duration:1500,
                        showClose: true,
                        message:'登陆跳转出错'+res.data.message
                    })
                })
            }
        }
    });
}

export default {
    post(url, params) {
        return axios({
            method: "post",
            url,
            data: params,
            headers: { 'token': localStorage.token },
        }).then(response => {
            return checkStatus(response);
        });
    },
    get(url, params) {
        params = qs.stringify(params);
        return axios({
            method: "get",
            url,
            params,
            headers: { 'token': localStorage.token },
        }).then(response => {
            return checkStatus(response);
        });
    },
    put(url, params) {
        console.log("put接口");
        console.log(params);
        // params = qs.stringify(params);
        return axios({
            method: "put",
            url,
            data: params,
            // params,
            headers: { 'token': localStorage.token },
        }).then(response => {
            return checkStatus(response);
        });
    },
    delete(url, params) {
        console.log("delete接口");
        console.log(params);
        params = qs.stringify(params);
        console.log(params);
        return axios({
            method: "delete",
            url,
            params,
            headers: { 'token': localStorage.token },
        }).then(response => {
            return checkStatus(response);
        });
    },
};
