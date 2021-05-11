var current_element = document.getElementById('profile');

function show_section(section) {
    console.log(current_element);
    var element = document.getElementById(section);
    console.log(element, '\n\n\n', current_element);
    current_element.style.display = "none";
    element.style.display = "revert";
    current_element = element;
}
