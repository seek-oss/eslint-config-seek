---
'eslint-config-seek': minor
---

Adds [react/jsx-curly-brace-presence][docs] as an error.
This removes unnecessary braces around strings in props and children.

It also enforces braces around expressions in props and children.

[docs]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md

### Examples

```diff
// Unecessary braces around string prop
- <Column width={'content'}>
+ <Column width="content">
```
```diff
// Unecessary braces around string child
- <Text>{'Hello'}</Text>
+ <Text>Hello</Text>
```
```diff
// Mandatory braces around prop expression
- <Button icon=<IconSearch />>
+ <Button icon={<IconSearch />}>
```
