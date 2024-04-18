class MenuToggle {
    constructor(toggleId, targetSelector) {
      this.toggle = document.getElementById(toggleId);
      this.target = document.querySelector(targetSelector);
      this.toggle.addEventListener('click', this.toggleMenu.bind(this));
    }
  
    toggleMenu() {
      this.target.classList.toggle('show-nav');
    }
  }
  
  const menu = new MenuToggle('toggle', 'body');