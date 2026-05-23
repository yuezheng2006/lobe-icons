---
nav: Components
group: Provider
title: Thunderstone
atomId: Thunderstone
description: https://thunderstone.com
---

## Icons

```tsx
import { Thunderstone } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Thunderstone size={64} />
    <Thunderstone.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Thunderstone } from '@lobehub/icons';

export default () => <Thunderstone.Text size={48} />;
```

## Combine

```tsx
import { Thunderstone } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Thunderstone.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Thunderstone } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Thunderstone.Avatar size={64} />
    <Thunderstone.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Thunderstone } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Thunderstone.colorPrimary} />
  </Flexbox>
);
```
