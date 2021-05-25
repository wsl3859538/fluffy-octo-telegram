var qiniu = require("qiniu");
//要上传的空间名
var bucket = 'your bucket';
var imageUrl = ''; // 域名后缀名称
var accessKey = 'Your accessKey';
var secretKey = 'Your secretKey';
var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);

var options = {
    scope: bucket,
};
var putPolicy = new qiniu.rs.PutPolicy(options);



var config = new qiniu.conf.Config();
config.zone = qiniu.zone.Zone_z0;

// 是否使用https域名
//config.useHttpsDomain = true;


config.useCdnDomain = true;

class QiniuController {
    static uploadQiniu(filePath, key) {


        var uploadToken = putPolicy.uploadToken(mac);

        const localFile = filePath
        const formUploader = new qiniu.form_up.FormUploader(config)
        const putExtra = new qiniu.form_up.PutExtra()

        return new Promise((resolved, reject) => {
            // 以文件流的形式进行上传
            // uploadToken是token， key是上传到七牛后保存的文件名, localFile是流文件
            // putExtra是上传的文件参数，采用源码中的默认参数
            formUploader.putStream(uploadToken, key, localFile, putExtra, function (respErr, respBody, respInfo) {

                let result = {
                    msg:'',
                    code:0,

                }


                if (respErr) {
                    result.msg = respErr;
                    result.code = 500;
                    resolved(result)
                }
                if (respInfo.statusCode == 200) {
                    console.log('success',respInfo)
                    result.msg = '上传成功';
                    result.code = 200;
                    result.url = 'http://video.mxangel.cn/'+ respInfo.data.key
                    resolved(result)
                } else {
                    result.msg = respInfo.data.error;
                    result.code = respInfo.statusCode;
                    resolved(result)
                }
            })
        })
    }
}

module.exports = QiniuController;




