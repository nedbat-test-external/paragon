---
title: 'SelectableBox'
type: 'component'
components:
- SelectableBox
- SelectableBoxSet
categories:
- Forms
- Content
status: 'New'
designStatus: 'Done'
devStatus: 'In progress'
notes: |
---

A box that has selection states. It can be used as an alternative to a radio button or checkbox set.

The ``SelectableBox`` can contain any kind of content as long as it is not clickable. In other words, there should be no clickable targets distinct from selection.

## Basic Usage

As ``Checkbox``

```jsx live
() => {
  const type = 'checkbox';
  const allCheeseOptions = ['swiss', 'cheddar', 'pepperjack'];
  const [checkedCheeses, { add, remove, set, clear }] = useCheckboxSetValues(['swiss']);

  const handleChange = e => {
    e.target.checked ? add(e.target.value) : remove(e.target.value);
  };
  
  const isInvalid = () => checkedCheeses.includes('swiss');

  return (
    <SelectableBox.Set
      value={checkedCheeses}
      type={type}
      onChange={handleChange}
      name="cheeses"
    >
      <SelectableBox value="swiss" type={type} aria-label="checkbox">
        <div>
          <h3>It is my first SelectableBox</h3>
          <p>Swiss</p>
        </div>
      </SelectableBox>
      <SelectableBox value="cheddar" inputHidden={false} type={type} aria-label="checkbox">
        Cheddar
      </SelectableBox>
      <SelectableBox
        value="pepperjack"
        inputHidden={false}
        type={type}
        isInvalid={isInvalid()}
        aria-label="checkbox"
      >
        <h3>Pepperjack</h3>
      </SelectableBox>
    </SelectableBox.Set>
  );
}
```

As ``Radio``

```jsx live
() => {
  const type = 'radio';
  const [value, setValue] = useState('green');
  const handleChange = e => setValue(e.target.value);

  return (
    <SelectableBox.Set
      type={type}
      value={value}
      onChange={handleChange}
      name="colors"
      columns={3}
    >
      <SelectableBox value="red" type={type} aria-label="checkbox">
        <div>
          <h3>It is Red color</h3>
          <p>Select me</p>
        </div>
      </SelectableBox>
      <SelectableBox value="green" inputHidden={false} type={type} aria-label="checkbox">
        <h3>Green</h3>
        <p>Leaves and grass</p>
      </SelectableBox>
      <SelectableBox value="blue" inputHidden={false} type={type} aria-label="checkbox">
        <h3>Blue</h3>
        <p>The sky</p>
      </SelectableBox>
    </SelectableBox.Set>
  );
}
```

As ``Checkbox`` with ``isIndeterminate``

```jsx live
() => {
  const type = 'checkbox';
  const allCheeseOptions = ['swiss', 'cheddar', 'pepperjack'];
  const [checkedCheeses, { add, remove, set, clear }] = useCheckboxSetValues(['swiss']);

  const allChecked = allCheeseOptions.every(value => checkedCheeses.includes(value));
  const someChecked = allCheeseOptions.some(value => checkedCheeses.includes(value));
  const isIndeterminate = someChecked && !allChecked;

  const handleChange = e => {
    e.target.checked ? add(e.target.value) : remove(e.target.value);
  };

  const handleCheckAllChange = ({ checked }) => {
    checked ? set(allCheeseOptions) : clear();
  };

  return (
    <>
      <div className="mb-3">
        <SelectableBox
          checked={allChecked}
          isIndeterminate={isIndeterminate}
          onClick={handleCheckAllChange}
          inputHidden={false}
          type={type}
          aria-label="checkbox"
        >
          All the cheese
        </SelectableBox>
      </div>
      <SelectableBox.Set
        value={checkedCheeses}
        type={type}
        onChange={handleChange}
        name="cheeses"
        columns={3}
      >
        <SelectableBox value="swiss" type={type} aria-label="checkbox">
          <div>
            <h3>It is my first SelectableBox</h3>
            <p>Swiss</p>
          </div>
        </SelectableBox>
        <SelectableBox value="cheddar" inputHidden={false} type={type} aria-label="checkbox">
          Cheddar
        </SelectableBox>
        <SelectableBox value="pepperjack" inputHidden={false} type={type} aria-label="checkbox">
          <h3>Pepperjack</h3>
        </SelectableBox>
      </SelectableBox.Set>
    </>
  );
}
```
