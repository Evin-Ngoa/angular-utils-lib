# AngularUtilsLib

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.


## Installation Guide
1. In your Angular application, install the angular-utils-lib library:
```perl
npm install angular-utils-lib
```

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

## Available Directives

### 1. Filter Out Special Characters from inputs
- This directive by default only allow numbers and alphabet characters. Space is *NOT* allowed by default.
- Use the `appNoSpecialCharacters` directives in your application:

```html
    <input type="text" appNoSpecialCharacters />
```

- If you need to add special character(s) include `includeChars` 
```html
    <input type="text" appNoSpecialCharacters includeChars="_" />
```

- Below tag allows space, comma, fullstop and exclamation mark in a text.
```html
    <textarea appNoSpecialCharacters includeChars=" ,.!"></textarea>
```



