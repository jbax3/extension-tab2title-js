require('../style/plugin.css');

module.exports = [{
    id: 'jupyterlab_tab2title',
    autoStart: true,
    activate: function(app) {
      console.log('JupyterLab extension jupyterlab_tab2title is activated!');
      document.onclick = ()=>{document.title = 'JupyterLab' + ' - ' + document.getElementsByClassName("jp-mod-current")[0].title.split('Name: ')[1].split('\n')[0]};
    }
}];
