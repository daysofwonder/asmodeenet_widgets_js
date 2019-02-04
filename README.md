AsmodeeNet Widget JS Library
--------------

This library provides access to some Widgets usable directly in your own website. These Widgets give some user profile information pieces, like the ones you can see on the Asmodee.net Account Profile pages.

These Widgets are pure javascript code (internally written using Vue.js) injectable in your page without any other dependencies than the main [Asmodee.net SSO JS](https://github.com/daysofwonder/asmodeenet_sso_js) library.

`Important`: When you call the [init](https://github.com/daysofwonder/asmodeenet_sso_js#initialization) of the SSO library, you pass a *client_id* for the configuration of the user's connection. To be able to use the Widget library, the client id of your app should be authorized server side. Contact us so that we add your app to the whitelist.

The library can be used for logged or unlogged user. For unlogged users, not all Widgets are usable (cf. [Widgets list](#widgets-list)).

**Table of contents**
* [Installation](#installation)
* [Basic use](#basic-use)
    * [a) Inject the library](#a-inject-the-library)
    * [b) HTML tag(s)](#b-html-tag-s)
    * [c) Javascript call](#c-javascript-call)
* [Advanced use](#advanced-use)
    * [Global options](#global-options)
    * [Widgets list](#widgets-list)
* [Examples](#examples)
    * [The simplest use of the Widgets library](#the-simplest-use-of-the-widgets-library)
    * [All uses in one page](#all-uses-in-one-page)

## Installation

Like written in the introduction, you should have installed the [Asmodee.net SSO JS](https://github.com/daysofwonder/asmodeenet_sso_js) before.

```shell
npm install --save git+https://github.com/daysofwonder/asmodeenet_widgets_js.git
```

## Basic use

### a) Inject the library

In your HTML code, you should load the main JS library of this Widgets library just after loading the [AsmodeeNet SSO JS Library](https://github.com/daysofwonder/asmodeenet_sso_js).

```html
<script src="an_sso.min.0.3.2-1.js"></script>
<script src="dist/0.0.5/an_wdg.min.js"></script>
```

When you deploy your code, it's important to deploy all the content of the directory corresponding to the version you use. For example, if you use the first distributed version, `0.0.5`, you should deploy the entire `dist/0.0.5` directory.

### b) HTML tag(s)

After this, you should include some HTML tag to indicate where the Widget should be displayed.

Ex.:
```html
<div id="user_activities_tgt"></div>
```

A CSS selector path will be used later to indicate where to inject the Widget by giving the id of the tag (*`#user_activities_tgt`*).

You can add several tags in the page, for different Widgets, or add the same Widget several times (with or without the same configuration).

### c) Javascript call

The first step is to call the initialization of the Widget library, just after the one of the [AsmodeeNet SSO JS Library](https://github.com/daysofwonder/asmodeenet_sso_js).

```javascript
// The SSO initialization and discover call
AsmodeeNet.init({
    [...]
}).discover();

// The Widgets library initialization
AsmodeeNet.Widget.init({lang: 'fr'});
```

As you can see, you should pass a JS object with the locale configuration (language) to use for texts in Widgets.

Indeed, the Widget library comes with a translation system used for some static parts in 3 languages (at the moment): English (`en`, the default), French (`fr`) and German (`de`).

For unlogged Widgets, you can inject them directly after the initialization of the Widget library:

```javascript
AsmodeeNet.Widget.init({lang: 'fr'});
AsmodeeNet.Widget.inject('user-public-collection', '#public_collection_' + 673890 + '_tgt', {userProfile: {id: 673890}});
AsmodeeNet.Widget.inject('user-public-activities', '#public_activities_' + 673890 + '_tgt', {userProfile: {id: 673890}});
```

When the user is connected, you can call the injection of all Widgets. Therefore the easiest is to place the injection code inside the success callback method of the SSO connection:

```javascript
function userIsConnected () {
    [...]
    AsmodeeNet.Widget.inject('user-activities', '#user_activities_tgt');
}
```

This injects the Widget named *user_activities* inside the HTML tag with the id *user_activities_tgt*. And that's all!

To see the simplest usage you can do with the Widgets library, see [the simplest example](#the-simplest-use-of-the-widgets-library) in the [Examples section](#examples)
`Important`: When you call the SSO init library, you pass a *client_id* for the configuration of the user's connection. To be able to use the Widget library, the client id of your app should be authorized server side. For this, contact us so that we can whitelist your app.

## Advanced Use

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

Method to inject and display a Widget in the page. You should call it for each Widget you want to add in your page (even if you want to display the same one more than once).

Parameters:
* `name`: _string_, mandatory. The name of the Widget you want to add. You can find the list here [Widgets list](#widgets-list)
* `targetElementSelector`: _string_, mandatory. The ID of the HTML tag used as target to place the Widget. It should be a CSS Path selector ID (_#IDSTRING_)
* `options`: _object_, optional. Some global options available for all Widgets. Some specific Widgets could add mandatory option parametrizable using this `options` object. In this case, the options will be described in the [Widgets list](#widgets-list).
    - _`width`_: _mixed_, optional. If you want to force a specifc width for the Widget, indicate it here. It's taking the same type of value of the CSS width parameter: a specific width in pixel (`100px`) or in percentage (`50%`).
    - _`height`_: _mixed_, optional. If you want to force a specifc height for the Widget, indicate it here. It's taking the same type of value of the CSS height parameter: a specific height in pixel (`100px`) or in percentage (`50%`).
    - _`zoom`_: _float_, optional. A CSS zoom factor to apply on the Widget.

Asmodee.net Widgets use Media queries for their display. So there are desktop views, mobile views, tablet views, etc. Playing with values of _`width`_ and _`zoom`_ allows to display Widgets with a desktop view, by example, in a small authorized space (to prevent the activation of the mobile view).

Example:

```javascript
AsmodeeNet.Widgets.inject('buddies-activities', '#place_of_buddieS_acts', {width: '300px', zoom: 0.5});
AsmodeeNet.Widgets.inject('user-activities', '#place_of_user_activities', {width: '500px', zoom: 0.8, userProfileId: {id: 4870342}});
AsmodeeNet.Widgets.inject('user-activities', '#place_of_user_activities_2', {width: '500px', zoom: 0.8, userProfileId: {id: 679200}});
```

#### injectWidget

This method is a proxy of the `inject` one but directly usable on the AsmodeeNet's namespace.

Parameters: same as [inject](#inject)

Example:
 ```javascript
 AsmodeeNet.injectWidget(module_name, targetId, options);
 ```

### Global options

### Widgets list

- `V-Card` Display a v-card for a given user, with some generic, and public, information. Usable in unlogged and logged mode.
    - `name`: `v-card` *(mandatory)*
    - `options`:
        - `userProfile`: {id: [user ID]} *(mandatory)*
        - `bodyHeight`: "[height in pixel or %, or null]" *(optional)* _mixed_, If you want to force a specifc height for the body part of the panel's widget, indicate it here. It's taking the same type of value of the CSS height parameter: a specific height in pixel (`100px`) or in percentage (`50%`). You can pass 'null' value to don't force the sub panel-body height (default is '100%')


| ![](/docs/screenshots/v-card-4.png) |
|:--:|
| *V-card large space (example: _{userProfile: {id: 4}}_)* |

| ![](/docs/screenshots/v-card-618-mobile.png) |
|:--:|
| *V-card tiny space (example: _{userProfile: {id: 618}}_)* |


- `User activities` (of the current connected user or the public activities of another user). if userProfile.id is set to `'me'`, the Widget is usable only in `logged` mode. If it's set to a user ID, it can be used in `logged` and `unlogged` modes.
    - `name`: `user-activities` *(mandatory)*
    - `options`:
        - `userProfile`: {id: ['me' OR user ID]} *(mandatory)*


| ![](/docs/screenshots/current_user_activities_mobile.png) |
|:--:|
| *Current User activities with mobile-like space (example: _{userProfile: {id: 'me'}}_)* |

| ![](/docs/screenshots/current_user_activities_desktop.png) |
|:--:|
| *Current User activities with Desktop-like space (example: _{userProfile: {id: 'me'}}_)* |

| ![](/docs/screenshots/public_activities_of_a_user_mobile.png) |
|:--:|
| *Public activities of a specific user with mobile-like space (_{userProfile: {id: 618}}_)* |

| ![](/docs/screenshots/public_activities_of_a_user_desktop.png) |
|:--:|
| *Public activities of a specific user with Desktop-like space (_{userProfile: {id: 618}}_)* |


- `User's buddies' activities`. Only in `logged` mode.
    -  `name`: `buddies-activities`

| ![](/docs/screenshots/buddies_activity_mobile.png) |
|:--:|
| *Buddies activity in mobile view* |

| ![](/docs/screenshots/buddies_activity_desktop.png) |
|:--:|
| *Buddies activity in desktop view* |


- `User's buddies' collection` (Which games are present in the Buddies' collection and which ones are the most played). Only in `logged` mode.
    - `name`: `buddies-collection`

| ![](/docs/screenshots/buddies_collection.png) |
|:--:|
| *Buddies collection* |


- `All Games counter` Display a dynamic counter which show the actual number of online games played on the Asmodee.net platfome, all games and all players included. (you can see an usage in the [Simplest example](#the-simplest-use-of-the-widgets-library))
    - `name`: `game-counter`

| ![](/docs/screenshots/buddies_collection.png) |
|:--:|
| *Buddies collection* |

## Examples

To launch the examples, type the following commands in a shell:

```bash
npm install
npm run dev-server
```

You can find 2 examples:

### The simplest use of the Widgets library

In the file `examples/simplest_example_unlogged.html`, you can find the simplest usage of the library you can do. Without the need to have a token for the app or for an an eventual user, this example doesn't need any login process.

After the webserver is launched, open a browser, and go to [http://localhost:8080/simplest_example_unlogged.html](http://localhost:8080/simplest_example_unlogged.html)

### All uses in a page

In this one, located in `examples/index.html`, you can find a complex usage of the Widgets library. With an identified 3rd party application (need of a configured SSO library with `client_id`, `redirect_uri`, ...) and with usage of both logged and unlogged widgets.


You can change the configuration for SSO (client_id, API Url, ...) in the file `examples/index.html`.

After the webserver is launched, open a browser, and go to [http://localhost:8080](http://localhost:8080)
