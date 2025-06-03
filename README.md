# AngularCommonLib
A standard utility library including the most often used angular functions.

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
import { NgstCommonUtilsModule } from 'ngst-common-utils';
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
    NgstCommonUtilsModule,
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

### 4. Countdown
- This countdown feature starts from the value you pass, greater than 0, to 0 with an interval of 1 second.
- Use the `countdown` and pass your integer value to `countdownValue` to commence countdown:
  
```html
<div countdown [countdownValue]="60"></div>
```

### 5. Currency / Numeric Formatter
- To improve readability, this feature adds commas to numeric numbers in an input. By default, it removes any non-numerical values.
- Use the `appCurrencyFormatter` in your input.
  
```html
<input type="text" appCurrencyFormatter>
```

### 6. Search filter for iterable template data
- This pipe only accepts data in an array of strings structure i.e. ['','',''].
- Use the `searchFilter` pipe in your application to pass your array of strings and the search string:
```html
    <div  *ngFor="let string of arrayOfStrings| searchFilter: searchString"></div>
```

### 7. Abbreviate profile names or any other string
- This pipe only accepts data in string format 'My string'.
- Use the `profileAbbreviator` pipe in your application to pass your strings and get the string abbreviation:
```html
    <p class="letter">{{'My String'| profileAbbreviator }}</p>

    <!-- Default behavior - returns 2 letters -->
    <p class="letter">{{ 'My Investments Account' | profileAbbreviator }}  <!-- Returns: "MI" --></p>

    <!-- With custom length parameter -->
    <p class="letter">{{ 'My Investments Account' | profileAbbreviator:3 }}</p>  <!-- Returns: "MIA" -->
    <p class="letter">{{ 'My Investments Account' | profileAbbreviator:1 }}</p>  <!-- Returns: "M" -->
    <p class="letter">{{ 'My Investments Account' | profileAbbreviator:1 }}</p>  <!-- Returns: "M" -->
    <p class="letter">{{ 'John Doe' | profileAbbreviator:5 }}</p>  <!-- Returns: "JD" (only 2 letters available) -->
```

## License

[GNU 2.0](https://www.gnu.org/licenses/old-licenses/gpl-2.0.html)
