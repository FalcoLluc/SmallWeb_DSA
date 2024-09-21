function setLoad(idButton, idSpinner) {
    $(`#${idSpinner}`).show();
    $(`#${idButton}`).attr("disabled", true);
    $(`#${idButton}`).html('<span class="spinner-border spinner-border-sm" id="spinner"></span> Loading...');
}

function pauseLoad(idButton, idSpinner) {
    $(`#${idButton}`).html('<span class="spinner-border spinner-border-sm" id="spinner"></span> Search');
    $(`#${idSpinner}`).hide();
    $(`#${idButton}`).attr("disabled", false);
}