document.getElementById('fill').addEventListener('click', function () {
  chrome.tabs.executeScript({ code: '' }, function () {
    chrome.tabs.executeScript({
      file: 'injector.js',
    });
  });
});
