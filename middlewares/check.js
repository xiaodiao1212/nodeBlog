module.exports = {
    checkLogin: function checkLogin(req, res, next){
        if(!req.session.user){
            req.flash('error', '未登录');
            return res.redirect('/siginin');
        }
        next();
    },
    checkNotLogin: function(req, res, next){
        if(req.session.user){
            req.flash('error', '已经登陆');
            console.log('这里');
            return res.redirect('/back'); // 返回之前的页面
        }
        next();
    }
}