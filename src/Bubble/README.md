---
title: 'Bubble'
type: 'component'
components:
- Bubble
status: 'New'
categories:
- Status & metadata
designStatus: 'Done'
devStatus: 'Done'
notes: |
---

Represents the filled circle with a number of an icon, supporting the usual color variants

## Basic Usage

```jsx live
() => {
  return (
    <>
      <Stack direction="horizontal" gap={4} className="mb-2">
        <Bubble>
          1
        </Bubble>
        <Bubble variant="error">
          1
        </Bubble>
        <Bubble variant="warning">
          1
        </Bubble>
        <Bubble variant="success">
          1
        </Bubble>
      </Stack>
      <Stack direction="horizontal" gap={4} className="mb-2">
        <Bubble>
          <Icon src={Check} />
        </Bubble>
        <Bubble variant="error">
          <Icon src={Check} />
        </Bubble>
        <Bubble variant="warning">
          <Icon src={Check} />
        </Bubble>
        <Bubble variant="success">
          <Icon src={Check} />
        </Bubble>
      </Stack>
    </>
  );
}
```

## Disabled variant

```jsx live
() => {
  return (
    <Stack direction="horizontal" gap={4} className="mb-2">
      <Bubble disabled>
        1
      </Bubble>
      <Bubble disabled>
        <Icon src={Check} />
      </Bubble>
    </Stack>
  );
}
```
