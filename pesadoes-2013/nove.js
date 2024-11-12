async function sleep(time) {
    setTimeout(function () {}, time*1000);
}
(async function () {
    console.log('sleep for two seconds');
    await sleep(10).then(() => console.log("woke"))
})()