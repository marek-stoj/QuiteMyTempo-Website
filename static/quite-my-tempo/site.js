function redirectToSelectedLanguagePage() {
  var languageSelect = document.getElementById("languageSelect");

  var selectedValue =
    languageSelect.options[languageSelect.selectedIndex].value;

  if (selectedValue) {
    window.location.href = selectedValue;
  }
}

function initSelectedLanguageSelectValue() {
  var languageSelect = document.getElementById("languageSelect");

  var currentURL = window.location.pathname;

  for (var i = 0; i < languageSelect.options.length; i++) {
    if (languageSelect.options[i].value === currentURL) {
      languageSelect.selectedIndex = i;
      break;
    }
  }
}
