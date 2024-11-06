const path = require('path')
module.exports = {
  version: "2.0",
  title: "IOPaint",
  description: "Image inpainting tool powered by SOTA AI models. Remove any unwanted object, defect, or even people from your pictures, and replace (powered by stable diffusion) anything in your pictures. https://www.iopaint.com/",
  icon: "icon.jpg",
  menu: async (info) => {
    let installing = info.running("install.js")
    let installed = info.exists("app/env")
    let running = info.running("start.js")
    let runconf = info.running("start-config.js")
    let config = info.exists("app/config.json")
    if (installing) {
      return [{
        default: true,
        icon: "fa-solid fa-plug",
        text: "Installing",
        href: "install.js",
      }]
    } else if (installed) {
      if (runconf && config) {
        let local = info.local("start-config.js")
        if (local && local.url) {
          return [{
            default: true,
            icon: "fa-solid fa-rocket",
            text: "Open Web UI",
            href: local.url,
          }, {
            icon: 'fa-solid fa-terminal',
            text: "Terminal",
            href: "start-config.js",
          }, {
            icon: "fa-solid fa-plug",
            text: "IOPaint Settings",
            href: "web-config.js",
          }]
        } else {
          return [{
            default: true,
            icon: 'fa-solid fa-terminal',
            text: "Terminal",
            href: "start-config.js",
          }]
        }
      } else if (running) {
          let local = info.local("start.js")
          if (local && local.url) {
            return [{
              default: true,
              icon: "fa-solid fa-rocket",
              text: "Open Web UI",
              href: local.url,
            }, {
              icon: 'fa-solid fa-terminal',
              text: "Terminal",
              href: "start.js",
            }, {
              icon: "fa-solid fa-plug",
              text: "IOPaint Settings",
              href: "web-config.js",
            }]
          } else {
            return [{
              default: true,
              icon: 'fa-solid fa-terminal',
              text: "Terminal",
              href: "start.js",
            }]  
          }
    } else if (config) {
      return [{
        default: true,
        icon: "fa-solid fa-power-off",
        text: "Start",
        href: "start-config.js",
      }, {
        icon: "fa-solid fa-plug",
        text: "IOPaint Settings",
        href: "web-config.js",
      }, {
        icon: "fa-solid fa-plug",
        text: "Update",
        href: "update.js",
      }, {
        icon: "fa-solid fa-plug",
        text: "Install",
        href: "install.js",
      }, {
        icon: "fa-regular fa-circle-xmark",
        text: "Reset",
        href: "reset.js",
      }]
    } else {
        return [{
          default: true,
          icon: "fa-solid fa-power-off",
          text: "Start",
          href: "start.js",
        }, {
          icon: "fa-solid fa-plug",
          text: "IOPaint Settings",
          href: "web-config.js",
        }, {
          icon: "fa-solid fa-plug",
          text: "Update",
          href: "update.js",
        }, {
          icon: "fa-solid fa-plug",
          text: "Install",
          href: "install.js",
        }, {
          icon: "fa-regular fa-circle-xmark",
          text: "Reset",
          href: "reset.js",
        }]
      }  
    } else {
      return [{
        default: true,
        icon: "fa-solid fa-plug",
        text: "Install",
        href: "install.js",
      }]
    }
  }
}
