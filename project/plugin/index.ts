interface Iplugin {
  new (): void;
}

interface pluginUse {
  desc: string;
  installHeades(): void;
}

export class Plugin extends HTMLElement{
  static plugin: Iplugin [] = [];

  // todo: 未完成接口
  static pluginUse: pluginUse [] = [];

  public loadPlugin() {
    for (const Plug of Plugin.plugin) {
      // @ts-ignore
      Plugin.pluginUse.push(new Plug())
    }
  }
}
