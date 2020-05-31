// 引入本文件夹下的所有插件
const modulesFiles = require.context(".", false, /\.ts$/);

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");
  const value = modulesFiles(modulePath);
  (modules as any).moduleName = value.default;
  return modules;
}, {});

export default modules;
