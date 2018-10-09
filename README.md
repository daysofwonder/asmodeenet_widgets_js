AsmodeeNet Widget JS Library
--------------

This library provides access to some widgets usable in your website, and giving some user's profile information, like you can have on the Asmodee.net Account's profile page.

These widgets are pure javascript code (internally written using Vue.js) injectable in your page without other dependencies than the main [Asmodee.net SSO JS](https://github.com/daysofwonder/asmodeenet_sso_js) library.

`Important`: When you call the [init](https://github.com/daysofwonder/asmodeenet_sso_js#initialization) of the SSO library, you pass a *client_id* for the configuration of user's connection. To be able to use the Widget library, the client id of your app should be authorized server side. For this, contact us to add to whitelist.

**Table of contents**
* [Installation](#installation)
* [Basic use](#basic-use)
    * [a) Inject the library](#a-inject-the-library)
    * [b) HTML tag(s)](#b-html-tag-s)
    * [c) Javascript call](#c-javascript-call)
* [Advanced use](#advanced-use)
    * [Global options](#global-options)
    * [Widgets list](#widgets-list)
* [Examples](#example)

## Installation

Like writed in the introduction, you should have installed the [Asmodee.net SSO JS](https://github.com/daysofwonder/asmodeenet_sso_js) before.

```shell
npm install --save git+https://github.com/daysofwonder/asmodeenet_widgets_js.git
```

## Basic use

### a) Inject the library

In your HTML, you should load the main JS library of this Widgets library just after the load of Asmodee.net SSO JS

```html
<script src="an_sso.min.0.3.2-1.js"></script>
<script src="dist/0.0.1/an_wdg.min.js"></script>
```

When you deploy your code, it's important to deploy all the content of the directory corresponding to the version you use. By example, if you use the first distributed version, `0.0.1`, you should deploy all the directory `dist/0.0.1`

### b) HTML tag(s)

After this you should include some html tag for the widget you want to display.

Ex.:
```html
<div id="user_activities_tgt"></div>
```

A CSS selector path should be used later to indicate where to inject the widget, so giving the id of the tag (*`#user_activities_tgt`*)

You could add many tags in the page, for different widgets or to add same widget many times (with or without same configuration)

### c) Javascript call

The first step is to call the initialization of the Widget library, just after the one of the SSO library.

```javascript
// The SSO initialization and discover call
AsmodeeNet.init({
    [...]
}).discover();

// The Widgets library initialization
AsmodeeNet.Widget.init({lang: 'fr'});
```

Have you see, you should pass a JS object with the locale configuration to use for texts in widgets.

Indeed, the Widget library comes with a translation system used to some static parts in 3 languages currently: English (`en`, the default), French (`fr`) and German (`de`).

When the user is connected, you could call the injection of widgets itself. So you can add them into the callback method of success of SSO connect.

```javascript
function userIsConnected () {
    [...]
    AsmodeeNet.Widget.inject('user-activities', '#user_activities_tgt');
}
```

This inject the widget named *user_activities* inside the html tag with the id *user_activities_tgt*. And that's all!

`Important`: When you call the SSO init library, you pass a *client_id* for the configuration of user's connection. To be able to use the Widget library, the client id of you app should be authorized server side. For this, contact us to authorize it.

## Advanced use

### API

#### init

Method to initialize the library. Should be called after the initialization of the [AsmodeeNet SSO JS Library](https://github.com/daysofwonder/asmodeenet_sso_js).

Parameters:
* {}: object, mandatory
    - `lang`: string, mandatory Configure the locale to use to display sentences to the end user.

Example:

```javascript
AsmodeeNet.Widget.init({lang: 'fr'});
```


#### inject

Method to inject and display a widget in the page. You should call it for each widget you want to add in your page (even, if you want to display the same one more than once).

Parameters:
* `name`: _string_, mandatory. The name of the widget you want to add. You can find the list here [Widgets list](#widgets-list)
* `targetElementSelector`: _string_, mandatory. The ID of the HTML tag used as target to place the widget. It should be a CSS Path selector ID (_#IDSTRING_)
* `options`: _object_, optional. Some global options available for all widgets. Some specific widgets could add mandatory option parametrizable using this `options` object. In this case, the options will be describe in the [Widgets list](#widgets-list).
    - _`width`_: _mixte_, optional. If you want to force a specifc width for the widget you should indicate here. It's taking the same type of value of the CSS width parameter : a specific width in pixel (`100px`) or in percentage (`50%`).
    - _`zoom`_: _float_, optional. A CSS zoom factor to apply on the widget.

Asmodee.net Widgets use Media queries for their display. So they are desktop views, mobile view, tablet view, etc. Playing with values of _`width`_ and _`zoom`_ permits to display widgets with a desktop view, by example, in a small space authorized (so to prevent the activation of the mobile view).

Example:

```javascript
AsmodeeNet.Widgets.inject('buddies-activities', '#place_of_buddieS_acts', {width: '300px', zoom: 0.5});
AsmodeeNet.Widgets.inject('user-activities', '#place_of_user_activities', {width: '500px', zoom: 0.8, userProfileId: {id: 4870342}});
AsmodeeNet.Widgets.inject('user-activities', '#place_of_user_activities_2', {width: '500px', zoom: 0.8, userProfileId: {id: 679200}});
```

#### injectWidget

This method is a proxy of the `inject` one but directly usable on the AsmodeeNet's namespace.

Parameters: Same as [inject](#inject)

Example:
 ```javascript
 AsmodeeNet.injectWidget(module_name, targetId, options);
 ```

### Global options

### Widgets list

- `User activities` (of the current connected user or the public activities of another user).
    - `name`: `user-activities` *(mandatory)*
    - `options`:
        - `userProfile`: {id: ['me' OR user ID]} *(mandatory)*


| ![](/docs/screenshots/current_user_activities_mobile.png) |
|:--:|
| *Current User activities with mobile-like space (example: _{userProfile: {id: 'me'}}_)* |

| ![](/docs/screenshots/current_user_activities_desktop.png) |
|:--:|
| *Current User activities with Desktop-like space (example: _{userProfile: {id: 'me'}}_)* |

| ![](/docs/screenshots/public_activities_of_a_user.png) |
|:--:|
| *Public activities of a specific user (_{userProfile: {id: 618}}_)* |

- `User's public collection`
    - `name`: `user-public-collection`
    - `options`:
        - `userProfile`: {id: ['me' OR user ID]} *(mandatory)*

| ![](/docs/screenshots/public_collection_of_a_user.png) |
|:--:|
| *Public collection of a specific user (example: _{userProfile: {id: 618}}_)* |


- `User's buddies' activities`
    -  `name`: `buddies-activities`

| ![](/docs/screenshots/buddies_activity_mobile.png) |
|:--:|
| *Buddies activity in mobile view* |

| ![](/docs/screenshots/buddies_activity_tablet.png) |
|:--:|
| *Buddies activity in tablet view* |

| ![](/docs/screenshots/buddies_activity_desktop.png) |
|:--:|
| *Buddies activity in desktop view* |


- `User's buddies' collection` (Which games are present in buddies' collection and which are the most played)
    - `name`: `buddies-collection`

| ![](/docs/screenshots/buddies_collection.png) |
|:--:|
| *Buddies collection* |
