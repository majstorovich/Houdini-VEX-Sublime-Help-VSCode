# Houdini VEX Sublime Help for VSCode

## Description
---
Houdini VEX Sublime Help is created as a **companion** extension to VEX ( [VSCode Marketplace](https://marketplace.visualstudio.com/items?itemName=melmass.vex) / [GitHub](https://github.com/melMass/vscode-vex) ) and as a in-editor replacement for Houdini Vex Help ( [VSCode Marketplace](https://marketplace.visualstudio.com/items?itemName=cgtoolbox-guillaume-jobst.houdinivexhelp) / [GitHub](https://github.com/cgtoolbox/vscode-houdinivexhelp) ).

It's using VEX [helpcards.json](https://github.com/teared/VEX/blob/master/commands/helpcards.json) from Sublime [VEX](https://github.com/teared/VEX) add-on.

*Sidenote:* Created as an test/exercise using [Your first Extension](https://code.visualstudio.com/api/get-started/your-first-extension), [Webview API](https://code.visualstudio.com/api/extension-guides/webview) and Houdini Vex Help ( [VSCode Marketplace](https://marketplace.visualstudio.com/items?itemName=cgtoolbox-guillaume-jobst.houdinivexhelp) / [GitHub](https://github.com/cgtoolbox/vscode-houdinivexhelp) ).


## Features
---
- Grabs text under editor cursor and display VEX help for it
- Doesn't matter if your cursor is on function name or inside the function (editing arguments)

## Installation
---
Until it's officially uploaded on VSCode Marketplace, you can build it yourself or install prebuild .vsix from [releases](https://github.com/majstorovich/Houdini-VEX-Sublime-Help-VSCode/releases/)

![HoudiniVEX_vsix_installation](https://raw.githubusercontent.com/majstorovich/Houdini-VEX-Sublime-Help-VSCode/main/images/HoudiniVEX_vsix_installation.jpg)

## Showcase
---
![HoudiniVEX_Horizontal](https://raw.githubusercontent.com/majstorovich/Houdini-VEX-Sublime-Help-VSCode/main/images/HoudiniVEX_Horizontal.jpg)


![HoudiniVEX_Vertical](https://raw.githubusercontent.com/majstorovich/Houdini-VEX-Sublime-Help-VSCode/main/images/HoudiniVEX_Vertical.jpg)

## **WARNING!**
---
Extension uses [Webview](https://code.visualstudio.com/api/extension-guides/webview) and is constantly updating viewer on a fixed interval. May cause performance issues. Testing needed!

FIxed interval is by default set to 500ms.

You can change that value by going in Settings - Extensions or by searching `@ext:undefined_publisher.houdinivexsublimehelp`
![HoudiniVEX_Vertical](./images/HoudiniVEX_Settings.jpg)