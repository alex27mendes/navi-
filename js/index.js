(function() {
  'use strict';

  var app = angular.module('myApp', [
    'ngTable',
    'eehNavigation',
    'eehSlideout',
    'ui.router',
    "ngRoute",
  ]);

  app.config(['eehNavigationProvider', function(eehNavigationProvider) {
    eehNavigationProvider
      .menuItem('myMenu.home', {
        text: 'Home',
        iconClass: 'glyphicon-home',
        href: '#'
      })
      .menuItem('myMenu.users', {
        text: 'Lista Clientes',
        iconClass: 'glyphicon-user',
        href: "#/listaClientes"
      })
      .menuItem('myMenu.settings', {
        text: 'Settings',
        iconClass: 'glyphicon-cog',
        href: "#/CadastroProdutos"
      })
      .menuItem('myMenu.alerts', {
        text: 'Formulario',
        iconClass: 'glyphicon-bell',
        href: '#/form'
      })
      .menuItem('myMenu.alerts', {
        text: 'Diversos Formulario',
        iconClass: 'glyphicon-bell',
        href: '#/formulario'
      })
      .menuItem('myMenu.Lists', {
        text: 'Lista produto',
        iconClass: 'glyphicon-list',
        href: '#/ngtable'
      });
  }]);
})();