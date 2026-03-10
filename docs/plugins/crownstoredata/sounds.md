---
sidebar_label: 'Sounds'
sidebar_position: 4
title: ""
description: Default sounds.yml file for the CrownStoreData and their explanation.
---

### Default sounds.yml

```yaml title="sounds.yml"
sounds:
  gg-wave-started-1: "minecraft:entity.boat.paddle_water:0.5:3.0"
  gg-wave-started-2: "minecraft:item.goat_horn.sound.0:0.5:3.0"
  gg-wave-message: "minecraft:block.note_block.banjo:0.5:3.0"
  purchase-message: "minecraft:item.goat_horn.sound.7:0.1:3.0"
  sale-activated: "minecraft:block.beacon.activate:0.5:3.0"
```

### Sounds
> These are simple key value pairs. The key represents the internal sound name and the value consists of `mc sound namespace and name:volume:pitch`.

* `gg-wave-started-1`: This sound is played when a GGWave stars.
* `gg-wave-started-2`: This sound is played when a GGWave stars.
* `gg-wave-message`: This sound is played when a player triggers the GGWave. The pitch increases every time up until a specific point then resets again.
* `purchase-message`: This is played when a purchase is broadcasted
* `sale-activated`: This is played when a sale was activated. 