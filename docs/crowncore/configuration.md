---
sidebar_label: 'Configuration'
sidebar_position: 2
title: ""
description: Into into CrownCore
---

### Default config.yml

```yaml title="config.yml"
#
# if you have any questions or suggestions, please do not hesitate and
# join our discord: https://dsc.gg/crownplugins
# we are there to assist you
#

# toggle the update reminder when joining (only players with permission see the reminder)
update-reminder: true
debug-mode: false

# the time in ms a players data will stay in the cache after leaving
data-cache-time: 3600000

teleport:
  delay: 5                # this is the teleport delay in s
  message-type: bossbar   # message type: bossbar, actionbar

# these are case sensitive
instant-teleport:
  always: false       # set this to true if you don't want to use the teleport animation, also players in gmc will always be teleported without the animation
  worlds: []          # players in these worlds will be teleported without a delay
  regions: []         # players in these regions will be teleported without a delay

cooldown:
  message: 0       # cooldown before being able to send another chat message in milliseconds
  command: 0       # cooldown before being able to send another command in milliseconds

# set the language default for number formatting. EX: en-US -> 10,000.00
number-formatting: "en_US"

time-formats:
  default: "%hh%:%mm%:%ss%"   # the default format to use when nothing else is specified
  teleportation: "%ss%.%t%"   # the format for the teleportation messages

redis:
  enabled: false

  host: "127.0.0.1"
  port: 6379
  username: ""          # leave empty if not using ACL users (default user)
  password: ""          # leave empty if no auth

  database: 0           # default db index (0–15 normally)
  ssl: false            # true if your Redis requires TLS
  timeout: 5000         # ms connect timeout
```

### Explanation

* `update-reminder`
  * Type: Boolean
  * Toggles the update reminder for admins. This is a global setting*.

* `debug-mode`
  * Type: Boolean
  * Toggles the debug mode for more console output. Can be toggled via command /crowncore debug.

* `data-cache-time`
  * Type: long
  * The time in ms player data will be kept in cache after leaving. This will probably be removed soon.




### Legend

> This is a global setting = A setting that is applied to all plugins using the core.