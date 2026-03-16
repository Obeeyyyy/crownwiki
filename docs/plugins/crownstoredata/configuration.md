---
sidebar_label: 'Configuration'
sidebar_position: 2
title: ""
description: Default config.yml file for CrownStoreData and their explanation.
---

### Default config.yml

```yaml title="config.yml"
license: paste-here
debug-mode: false

storage:
  method: h2
  data:
    host: crownhost
    database: crowndatabase
    username: crownuser
    password: "crownpassword"

    pool-settings:
      maximum-pool-size: 10
      minimum-idle: 10
      maximum-lifetime: 1800000
      keepalive-time: 0
      connection-timeout: 5000

store:
  provider: manual
  secret: paste-here

fetch-data: true
enable-offline-mode: false

payment-check-amount: 10
min-amount-for-broadcast: 0
ignore-payments-older-than: "2000-01-01"

interval:
  payment-data-update: 30 
  goal-data-update: 30
  sales-data-update: 0
  ranking-data-update: 30 
  sale-reminder: 0 

commands:
  on-purchase: []
  on-update: [] 

goal:
  mode: internal
  bar:
    percentage: 2.0
    full: "&a|" 
    empty: "&c|"
  completion-commands: [] 
  milestones: []

webhook:
  enabled: false
  url: url-here

  embeds:
    purchase: false
    goal: false
    sale: false

  purchase-images:
    mode: random
    default-url: "default"
    map:
      12345: "url"

gg-wave:
  enabled: false
  duration: 10 
  trigger-text: "gg" 
  always-trigger: false
  keep-original-message: false
  min-amount: 0
  design:
    type: RAINBOW
    bold: false
    solid-color: ""
    solid-rainbow-colors: []
    gradient: "#ffffff:#000000"
  commands:
    - "eco give %player% 100"

fireworks:
  enabled: false
  mode: player
  power: 1
  effects:
    BALL_LARGE:
      colors:
        - "#34eb7d"
        - "#ec40ff"
        - "#4046ff"
      flicker: true
      trail: true

blacklist:
  enabled: false
  names:
    - obeeyyyy
```

### What these values mean

* `license`: Your license key. You can find everything you need to know about the license system [here](../../guides/license.md#where-do-i-find-my-license-key).
* `debug-mode`: Either `true` or `false`. Toggles debug messages in the console.

* `storage`:
  * `method`: You can choose between `h2`, `mysql` and `mariadb`. Using `myslq` or `mariadb` will require configuration of the next `data` segment.
  * `data`:
    * `host`: Hostname of you database.
    * `database`: Logical name of your database
    * `username`: Username for authentication.
    * `password`: Password for authentication.

    * `pool-settings`: You can read more about pool settings [here](https://github.com/brettwooldridge/HikariCP/wiki/About-Pool-Sizing).
        * `maximum-pool-size`:
        * `maximum-idle`:
        * `maximum-lifetime`:
        * `keepalive-time`:
        * `connection-timeout`:

* `store`:
    * `provider`: You can choose between `manual`, `Tebex` and ``Craftingstore`.
    * `secret`: When using `Tebex` or `Craftingstore`. Put your store secret here.

    ### Where to get your store secret from
    > **On Tebex**: Tebex Dashboard -> Integrations > Gameservers > Show Secret Key > Secret Key

    > **On Craftingstore**: Dashboard -> Webstore > Servers > Reveal Token

    ### Explanation of manual mode
    > Manual mode is used for all store providers that are not integratet into CSD yet.
    > Instead of fetching payment data from an API, payments are registered with the /csd manualpayment command.
    > This command will need to be executed from your webstore.

* `fetch-data`: Either `true` or `false`. Toggles data fetching from API. Used in multi server setups.
* `enable-offline.mode`: Either `true` or `false`. Used for cracked servers only.

* `payment-check-amount`: The amount of payments that are fetched with each API call. Not needed in `manual` mode.
* `min-amount-for-broadcast`: The minimum value a purchase has to have to be broadcasted ingame and in discord.
* `ignore-payments-older-than`: Payments older that this date will be completely ignored. Not needed in `manual` mode.

* `interval`: These values are represented in seconds. The value `0` will `disable` these features.
    * `payment-data-update`: The time that has to pass before payment data is fetched again. Not needed in `manual` mode.
    * `goal-data-update`: The time that has to pass before goal data is fetched again. Not needed in `manual` or `internal` mode.
    * `sales-data-update`: The time that has to pass before sale data is fetched again. Not needed in `manual` mode.
    * `ranking-data-upate`: The time that has to pass before the ranking data is recalculated.
    * `sale-reminder`: The time that has to pass before the sale broadcast is sent again. Does not work for `manual` mode.

* `commands`:
    * `on-purchase`: An [Array](../../guides/yaml#array) containing commands that will be executed by the server when a purchase is made.
    * `on-update`: An [Array](../../guides/yaml#array) containing commands that will be executed by the server with every data fetch. Does not work for `manual` mode.

* `goal`:
    * `mode`: Either `internal` or `external`.
    * `bar`:
        * `percentage`: This is the percentage a single bar represents. So when its `1`, there will be `100` bars. When its `5`, there will be `20` bars.
        * `full`: The string that represents a full bar.
        * `empty`: The string taht represents an empty bar.
    * `completion-commands`: An [Array](../../guides/yaml#array) containing commands that will be executed on goal completion
    * `milestones`: An [Array](../../guides/yaml#array) containing the goal milestone percentages.

    ### Whats the difference between internal and external goal modes
    > Internal mode lets the plugin handle all goal logic. So you just create a goal using the commands. Set the target and current values and use the id from the goal list.
    > External mode will make the plugin read goal data from the store's API. Only available for `Tebex` and `Craftingstore`.
    
* `webhook`:
    * `enabled`: Either `true` or `false`. What it does should be clear.
    * `url`: Your webhook URL.

    * `embeds`: These are either `true` or `false` and toggle the individual embeds.
        * `purchase`:
        * `goal`:
        * `sale`:

    * `purchase-images`:
        * `mode`: Either `random` or `mapped`
        * `default-url`: This acts as a fallback URL for the `mapped` mode.
        * `map`: Simple key value pairs. Key represents package id and value an URL for the image.

        ### Example of mapped mode for purchase-image
        ```yml
        purchase-images:
            mode: random # you can choose between: random, mapped
            default-url: "default"
            map:
            12345: "https://your image url"
        ```

* `gg-wave`:
    * `enabled`: Either `true` or `false`. What it does should be clear.
    * `duration`: The duration of the GGWave in seconds.
    * `trigger-text`: The text players have to type to trigger in the GGWave. `all` can be used to allow any input.
    * `always-trigger`: This will allow all messages sent to trigger a ggwave instead of just the allowed `tigger-text`.
    * `keep-original-message`: This will keep the players message in the ggwave format instead of replacing it with `ggwave-message-text` from `messages.yml`.
    * `min-amount`: The minimum value a purchase has to have to trigger a GGWave.
    * `design`:
        * `type`: Either `rainbow`, `solid`, `solidrainbow`, `gradient`
        * `bold`: Either `true` or `false`.
        * `solid-color`: The color to use for `solid` mode.
        * `solid-rainbow-colors`: An [Array](../../guides/yaml#array) of colors to cycle thru in `solidrainbow` mode.
        * `gradient`: A string containing two colors seperated with a `:` to build the gradient.
    * `commands`: An [Array](../../guides/yaml#array) if commands that are executed once per ggwave per player.

* `fireworks`:
    * `enabled`: Either `true` or `false`.
    * `mode`: Either `player` or `all`. Should be clear.
    * `power`: Power for the firework.
    * `effects`: You can put the effects in here, follow the efect object structure.

    ### Example for a firework effect
    ```yml
    BALL_LARGE:
      colors:
        - "#34eb7d"
        - "#ec40ff"
        - "#4046ff"
      flicker: true
      trail: true
    ```

* `backlist`:
    * `enabled`: Either `true` or `false`.
    * `names`: An [Array](../../guides/yaml#array) containing playernames. Purchases from players with these names will not be broadcasted.