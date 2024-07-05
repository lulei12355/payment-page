// script.js
document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var amount = document.getElementById('amount').value;

    if (name && email && amount) {
        alert('付款信息已提交！\n\n姓名: ' + name + '\n电子邮件: ' + email + '\n金额: ' + amount + ' 元');
        
        // 在这里可以添加实际的支付处理代码，例如调用支付API
    } else {
        alert('请填写所有字段');
    }
});
