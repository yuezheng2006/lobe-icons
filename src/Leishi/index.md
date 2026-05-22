---
nav: Components
group: Provider
title: Leishi (雷石)
atomId: Leishi
description: https://leishi.com
---

## Icons

```tsx
import { Leishi } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Leishi size={64} />
    <Leishi.Color size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Leishi } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Leishi.Avatar size={64} />
    <Leishi.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Leishi } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Leishi.colorPrimary} />
  </Flexbox>
);
```

## Note

The SVG paths for this icon are placeholders and need to be generated from the provided PNG logos using a vectorization tool.
