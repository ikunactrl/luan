// script.js
const images = [
    'https://avatars.mds.yandex.net/i?id=ba6e7a410d28c656b4113ca14ec503564eae825d-5219049-images-thumbs&n=13',
    'https://yandex-images.clstorage.net/GrM9b9334/e1d2a3Yf6/SG0m56hA3wpMNnK6T0_mPNvNrjSG708xiXJEl8QriQwfuLwCxEews3nt41rQnvBvrU-wNOkhPjFtYzTRUvXjoy1wZ_aZWdtTHUdu3x9v6ijTuNs4wp4nIP0bTefpM4BRY6yo83GWZCuMETvvKCpZXvlm4XCBXT9EEPqshBKsJnLsqUJzALQOBmyeo753A8Z4A2wy6Ep-v7hJGnFDOcLo5L4JcAc9guz3LHnPD5CW7fohDqHsRAUrXLAK4ThOyDJWjC1GX_Cs-opwTp8yh38KgIugwiiuBrtE1eod78H6ZMAeoYAHgcboZ2hJu5fQEokazfoVBOixq9SoFl0ARjD-doAdipMQXDbyNIqHLu9_CvyniMa0jno3dLl2DYvZOnxknrn4pyWWiDuQ-UdnhMqBAvFC3czMqX_AjNo1GAoo9kqslSorKCQqCriWiyKHm-JEX0jyVPYqoyhBbg1f9W50fF6tyEedLiiT_DW_X-g-ZQJNutU4QG3TPBSqkUCiwKYObNWul7AQKhbs6qdKwwPGNO80RqSGFqOYNZ6ZB0UiwNhS8UzPUSqwG2TJb5-cBqW2SQpBfKRxe1BEvkncysySGugJDnsgrLYWdLKbPucfdkgbJIa8lpbbqGmG8S_1wqxEpol8r7nKZLd0oUPf3AJRElVqaeBYNQ8c6LrBRL5MEqJkUQZjzIzSitw6V8K7x_6Uk-wSoLqCQ8z56t3zVT5QQFp5fCedXsiPIHnTg5ySpWpJ1kmE5CljoHg6jaR-1HqKyJ0qY_zA3orwFisGu3fyjIO8TliabtNM6RaNh0l6iMC-Wdhr2Q4k90CpR2fcblFqdXJZKFRt5xAQ2gW8Jvj24uDlkj9shKoi3J7rrnuLRsxvDEqEuqI_KKnSsYs5qtwg1n0gk4FCfA-s-SdzPK41_rFq-aAwoascBJrFXDokPvL4VYaDoEzyilyaf9obUwa0n_xW7CLmfxDhHhFXBbo4',
    'https://yandex-images.clstorage.net/GrM9b9334/e1d2a3Yf6/SG0m56hA3wpMNnK6T0_mPNvNrjSG708xiXJElrl_rGVfsLwa1Fegq3S4s0-tz60_tB-QIbR8fjl8EkTkE6ivklg9Nq6ZXdN3GWdqwx9v6ijTuNs4wp4nIP0bTefpM4BRY6yo83GWZCuMETvvKCpZXvlm4XCBXT9EEPqshBKsJnLsqUJzALQOBmyeo753A8Z4A2wy6Ep-v7hJGnFDOcLo5L4JcAc9guz3LHnPD5CW7fohDqHsRAUrXLAK4ThOyDJWjC1GX_Cs-opwTp8yh38KgIugwiiuBrtE1eod78H6ZMAeoYAHgcboZ2hJu5fQEokazfoVBOixq9SoFl0ARjD-doAdipMQXDbyNIqHLu9_CvyniMa0jno3dLl2DYvZOnxknrn4pyWWiDuQ-UdnhMqBAvFC3czMqX_AjNo1GAoo9kqslSorKCQqCriWiyKHm-JEX0jyVPYqoyhBbg1f9W50fF6tyEedLiiT_DW_X-g-ZQJNutU4QG3TPBSqkUCiwKYObNWul7AQKhbs6qdKwwPGNO80RqSGFqOYNZ6ZB0UiwNhS8UzPUSqwG2TJb5-cBqW2SQpBfKRxe1BEvkncysySGugJDnsgrLYWdLKbPucfdkgbJIa8lpbbqGmG8S_1wqxEpol8r7nKZLd0oUPf3AJRElVqaeBYNQ8c6LrBRL5MEqJkUQZjzIzSitw6V8K7x_6Uk-wSoLqCQ8z56t3zVT5QQFp5fCedXsiPIHnTg5ySpWpJ1kmE5CljoHg6jaR-1HqKyJ0qY_zA3orwFisGu3fyjIO8TliabtNM6RaNh0l6iMC-Wdhr2Q4k90CpR2fcblFqdXJZKFRt5xAQ2gW8Jvj24uDlkj9shKoi3J7rrnuLRsxvDEqEuqI_KKnSsYs5qtwg1n0gk4FCfA-s-SdzPK41_rFq-aAwoascBJrFXDokPvL4VYaDoEzyilyaf9obUwa0n_xW7CLmfxDhHhFXBbo4'
];


let currentIndex = 0;
let slideInterval;

function showImage(index) {
    document.getElementById('current-image').src = images[index];
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, dotIndex) => {
        dot.classList.toggle('active', index === dotIndex);
    });
}

function startSlideshow(interval) {
    clearInterval(slideInterval); // 清除之前的定时器
    slideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }, interval);
}

document.querySelectorAll('.dot').forEach(dot => {
    dot.addEventListener('click', function () {
        currentIndex = parseInt(this.getAttribute('data-index'));
        showImage(currentIndex);
        startSlideshow(3000); // 重新开始计时器
    });
});
function isDesktopBrowser() {
    // 用户代理字符串
    const userAgent = navigator.userAgent;

    // 检测是否为移动设备
    const mobileKeywords = ['Mobile', 'Android', 'iPhone', 'iPad'];

    // 检查用户代理字符串中是否包含移动关键词
    for (let keyword of mobileKeywords) {
        if (userAgent.indexOf(keyword) !== -1) {
            return false; // 如果包含，则不是桌面浏览器
        }
    }

    return true; // 如果没有包含移动关键词，则认为是桌面浏览器
}
function wait(xSeconds, callback) {
    setTimeout(callback, xSeconds * 1000);
}
function delyuansu() {
    document.getElementById("dhk").className = "kong"
    document.getElementById("dhk2").className = "kong"
    document.getElementById("dhk3").className = "kong"
}
function qiehuan(id) {

    document.getElementById("homepage").className = "keyhd1"
    wait(1, function () {
        if (id === 1) {
            document.getElementById("pages1").style.display = "block"
            document.getElementById("pages2").style.display = "none"
            document.getElementById("pages3").style.display = "none"
        }
        if (id === 2) {
            document.getElementById("pages1").style.display = "none"
            document.getElementById("pages2").style.display = "block"
            document.getElementById("pages3").style.display = "none"
        }
        if (id === 3) {
            document.getElementById("pages1").style.display = "none"
            document.getElementById("pages2").style.display = "none"
            document.getElementById("pages3").style.display = "block"
        }

    }
    )
    wait(1, function () {
        document.getElementById("homepage").className = "keyhd2"
    })
}
window.addEventListener('resize', function () {
    var width = document.getElementById("homepage").clientWidth / 761 * 720
    document.getElementById("photo").style.height = height + "px"
    var height = width * 9 / 16
    document.getElementById("photo").style.width = width + "px"
    document.getElementById("text").style.top=50+height+"px"


})
showImage(currentIndex);
startSlideshow(3000); // 每3秒切换一次图片
if (isDesktopBrowser()) {
    console.log('This is a desktop browser.');
    console.log('不执行操作');
} else {
    console.log('This is a mobile browser.');
    document.getElementById("homepage").style.width = "60%"
    document.getElementById("anj").style.width = "100px"
    document.getElementById("btn1").style.width = "100px"
    document.getElementById("btn2").style.width = "100px"
    document.getElementById("btn3").style.width = "100px"
    document.getElementById("homepage").style.left="120px"
}
var width = document.getElementById("homepage").clientWidth / 761 * 720
document.getElementById("photo").style.height = height + "px"
var height = width * 9 / 16
document.getElementById("photo").style.width = width + "px"
document.getElementById("text").style.top=50+height+"px"