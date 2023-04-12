# AngularCommonLib
Common libraries for angular projects.

## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)


## Installation
1. In your Angular application, install the angular-utils-lib library:

```perl
npm i angular-utils-lib
```

In app.module, import the module
```typescript
import { AngularUtilsLibModule } from 'angular-utils-lib';
```
Finally import it to the module
```typescript
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularUtilsLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```

## Usage

### 1. Filter Out Special Characters from inputs
- By default, this directive only accepts letters and numbers. Space is by default *NOT* permitted.
- Use the `appNoSpecialCharacters` directive in your application:

```html
    <input type="text" appNoSpecialCharacters />
```

- If you need to add special character(s) include `acceptChars` 
```html
    <input type="text" appNoSpecialCharacters acceptChars="_" />
```

- Below tag allows space, comma, fullstop and exclamation mark in a text.
```html
    <textarea appNoSpecialCharacters acceptChars=" ,.!"></textarea>
```

### 2. Credit card number format
- This directive only accepts well-formatted 16-digit numbers.
- Use the `appCreditCard` directive in your application:

```html
    <input type="text" appCreditCard />
```


## License

[GNU 2.0](https://www.gnu.org/licenses/old-licenses/gpl-2.0.html)