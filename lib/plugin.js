require('../style/plugin.css');

module.exports = [{
    id: 'jupyterlab_tab2title',
    autoStart: true,
    activate: function(app) {
      console.log('JupyterLab extension jupyterlab_tab2title is activated!');
      console.log(app.commands);
    }
}];
