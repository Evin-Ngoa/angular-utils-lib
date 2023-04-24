# AngularCommonLib
Common libraries for angular projects.

## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)


## Installation
1. In your Angular application, install the ngst-common-utils library:

```perl
npm i ngst-common-utils
```

In app.module, import the module
```typescript
import { AngularUtilsLibModule } from 'ngst-common-utils';
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
### 3. Time difference in days
- This pipe only accepts date formatted in 'YYYY-MM-DD'.
- Use the `diffDate` pipe in your application to pass your future date:
```html
    <p>{{'2023-04-14'|diffDate}}</p>
```

## License

[GNU 2.0](https://www.gnu.org/licenses/old-licenses/gpl-2.0.html)

### 4. Countdown
- This countdown feature starts from the value you pass, greater than 0, to 0 with an interval of 1 second.
- Use the `countdown` pipe and pass your integer value to `countdownValue` to commence countdown:
  
```html
<div countdown [countdownValue]="60"></div>
```

## License

[GNU 2.0](https://www.gnu.org/licenses/old-licenses/gpl-2.0.html)