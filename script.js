/**
 * Toggles the visibility of the selected box.
 * @param {string} boxId - The ID of the content section to toggle.
 */
function toggleBox(boxId) {
    const content = document.getElementById(boxId);
    const box = content.closest('.box');
    const isExpanded = content.hidden === false;

    // Hide all content sections
    document.querySelectorAll('.content').forEach((item) => {
        item.hidden = true;
        item.closest('.box').setAttribute('aria-expanded', 'false');
    });

    // Toggle the clicked box
    content.hidden = isExpanded ? true : false;
    box.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');

    // Automatically select the corresponding radio button
    const radio = box.querySelector('input[type="radio"]');
    if (radio) {
        radio.checked = true;
    }
}

/**
 * Stops event propagation to prevent unwanted parent-level interactions.
 * @param {Event} event - The event object.
 */
function stopPropagation(event) {
    event.stopPropagation();
}

// Initialize dropdown behavior to prevent propagation and set styles
document.querySelectorAll('select').forEach((dropdown) => {
    dropdown.addEventListener('click', stopPropagation);
    dropdown.addEventListener('change', function () {
        // Change the color of the dropdown to match the selected option
        this.style.color = this.options[this.selectedIndex].style.color;
    });
});
