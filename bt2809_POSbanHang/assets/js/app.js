var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope){
    $scope.quantily = 1;
    $scope.productsList = [
        {
            id: 1,
            img: './assets/img/ip13promax.jpeg',
            about: 'Điện thoại iPhone 13 Pro Max 256GB - Hàng Chính Hãng',
            price: '33450000'
        },{
            id: 2,
            img: './assets/img/ip13pro.jpeg',
            about: 'Điện thoại iPhone 13 Pro 128GB - Hàng Chính Hãng',
            price: '27450000'
        },{
            id: 3,
            img: './assets/img/ip13mini.jpeg',
            about: 'Điện thoại iPhone 13 Mini 128GB - Hàng Chính Hãng',
            price: '27450000'
        },{
            id: 4,
            img: './assets/img/dauganca.jpeg',
            about: 'Dầu gan cá ( sụn vi cá mập )',
            price: '699000'
        },{
            id: 5,
            img:'./assets/img/longmichon3d.jpeg',
            about: 'Lông mi chồn 3D - 3 cặp cao cấp - 3D - 11',
            price: '20000'
        },{
            id: 6,
            img: './assets/img/vienthuockanehibe.jpeg',
            about: 'Viên uống Kanehide Bio Fucoidan Okinawa',
            price:'2152000'
        },{
            id: 7,
            img: './assets/img/quethuduonghuyet.jpeg',
            about: 'Que thử đường huyết VivaCheck Eco - Hộp 25 que',
            price: '180000'
        },{
            id: 8,
            img:'./assets/img/sonduongmoi.jpeg',
            about: 'Son dưỡng có màu tự nhiên LipIce Sheer Color',
            price: '75000'
        },{
            id: 9,
            img:'./assets/img/maychoigame.jpeg',
            about: 'Máy chơi Game Nintendo Switch',
            price: '6990000'
        },{
            id: 10,
            img:'./assets/img/ocugndidong.jpeg',
            about: 'Ổ cứng di động WD My Passport - Model 2019',
            price: '1441000'
        },{
            id: 11,
            img:'./assets/img/boquanghebatu.jpeg',
            about:'Set quà Ba Tư nhụy hoa nghệ tây Saffron cao cấp',
            price:'490000'
        },{
            id: 12,
            img:'./assets/img/hailong.jpeg',
            about:'Hộp quà tết thực phẩm Hải Long 06',
            price:'469000'
        }
    ];
    $scope.cartList = [];
    $scope.addProd = function(index){
        $scope.cartList.push($scope.productsList[index]);
        console.log($scope.cartList);
    }
    $scope.deleteBtn = function(index){
        $scope.cartList.splice(index,1);
    }
})