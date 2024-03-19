function changeLink() {
    var inputLink = document.getElementById('inputLink').value;
    var videoId = extractVideoId(inputLink);
    if (videoId) {
        var newLink = 'https://psitoffers.store/1dm.php?vid=' + videoId;
        var outputBox = document.getElementById('changedLink');
        outputBox.innerHTML = 'Changed Link: <a href="' + newLink + '">' + newLink + '</a>';
        outputBox.style.display = 'block';
    } else {
        alert('Invalid link. Please enter a valid video link.');
    }
}

function extractVideoId(link) {
    var match = link.match(/([a-f\d]{8}-[a-f\d]{4}-[a-f\d]{4}-[a-f\d]{4}-[a-f\d]{12})/i);
    if (match) {
        return match[0];
    } else {
        return null;
    }
}

function copyChangedLink() {
    var changedLink = document.getElementById('changedLink').getElementsByTagName('a')[0].innerText;
    var tempInput = document.createElement('input');
    tempInput.value = changedLink;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('Copied to clipboard: ' + changedLink);
}
