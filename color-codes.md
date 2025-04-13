# Color Palette

## Primary Colors

### Night
A very dark, nearly black color
`#151616`

### White
A pure white color with a slight off-white tint
`#FEFEFE`

### Celeste
A light turquoise/cyan color
`#A0EBEB`

### Night-2
A darker black variant
`#0F0F0F`

### White-2
A pure white color
`#FFFFFF`

## Color Values

### HEX Values
```css
--night: #151616ff;
--white: #FEFEFEff;
--celeste: #A0EBEBff;
--night-2: #0F0F0Fff;
--white-2: #FFFFFFff;
```

### HSL Values
```css
--night: hsla(180, 2%, 8%, 1);
--white: hsla(0, 0%, 100%, 1);
--celeste: hsla(180, 65%, 77%, 1);
--night-2: hsla(0, 0%, 6%, 1);
--white-2: hsla(0, 0%, 100%, 1);
```

### RGB Values
```css
--night: rgba(21, 22, 22, 1);
--white: rgba(254, 254, 254, 1);
--celeste: rgba(160, 235, 235, 1);
--night-2: rgba(15, 15, 15, 1);
--white-2: rgba(255, 255, 255, 1);
```

## Gradient Options

```css
/* Directional Gradients */
--gradient-top: linear-gradient(0deg, #151616ff, #FEFEFEff, #A0EBEBff, #0F0F0Fff, #FFFFFFff);
--gradient-right: linear-gradient(90deg, #151616ff, #FEFEFEff, #A0EBEBff, #0F0F0Fff, #FFFFFFff);
--gradient-bottom: linear-gradient(180deg, #151616ff, #FEFEFEff, #A0EBEBff, #0F0F0Fff, #FFFFFFff);
--gradient-left: linear-gradient(270deg, #151616ff, #FEFEFEff, #A0EBEBff, #0F0F0Fff, #FFFFFFff);

/* Diagonal Gradients */
--gradient-top-right: linear-gradient(45deg, #151616ff, #FEFEFEff, #A0EBEBff, #0F0F0Fff, #FFFFFFff);
--gradient-bottom-right: linear-gradient(135deg, #151616ff, #FEFEFEff, #A0EBEBff, #0F0F0Fff, #FFFFFFff);
--gradient-top-left: linear-gradient(225deg, #151616ff, #FEFEFEff, #A0EBEBff, #0F0F0Fff, #FFFFFFff);
--gradient-bottom-left: linear-gradient(315deg, #151616ff, #FEFEFEff, #A0EBEBff, #0F0F0Fff, #FFFFFFff);

/* Radial Gradient */
--gradient-radial: radial-gradient(#151616ff, #FEFEFEff, #A0EBEBff, #0F0F0Fff, #FFFFFFff);
```