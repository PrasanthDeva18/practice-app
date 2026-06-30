# Angular HttpClient - API Calling Basics

## What is HttpClient?

`HttpClient` is an Angular service used to communicate with backend APIs using HTTP requests.

It allows Angular applications to:

* Fetch data (GET)
* Create data (POST)
* Update data (PUT/PATCH)
* Delete data (DELETE)

---

## Step 1: Import HttpClient

```ts
import { HttpClient } from '@angular/common/http';
```

---

## Step 2: Configure HttpClient

In standalone Angular applications, register `HttpClient` in `app.config.ts`.

```ts
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient()
  ]
};
```

Without this configuration, Angular throws:

```text
NullInjectorError: No provider for HttpClient
```

---

## Step 3: Inject HttpClient

Using the modern `inject()` API:

```ts
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

http = inject(HttpClient);
```

Or using constructor injection:

```ts
constructor(private http: HttpClient) {}
```

---

## Step 4: HttpClient Returns an Observable

```ts
users$ = this.http.get<User[]>('/api/users');
```

`HttpClient` **does not return the actual API data immediately**.

It returns an **Observable**.

An Observable represents a stream that **will emit the data when it becomes available**.

---

## Step 5: Observable and subscribe()

An Observable only describes the future data.

To receive the actual response, you must subscribe to it.

```ts
this.http
  .get<User[]>('/api/users')
  .subscribe(users => {
    console.log(users);
  });
```

When `subscribe()` is called:

1. The HTTP request is sent to the backend.
2. The backend processes the request.
3. The response is returned.
4. The Observable emits the response.
5. The callback inside `subscribe()` executes.

---

## Flow

```text
Angular Component
        │
        ▼
HttpClient
        │
        ▼
Returns Observable
        │
        ▼
subscribe()
        │
        ▼
HTTP Request Sent
        │
        ▼
Backend API
        │
        ▼
JSON Response
        │
        ▼
Observable Emits Data
        │
        ▼
Component Receives Data
```

---

## Important Interview Points

* `HttpClient` is Angular's built-in service for making HTTP requests.
* Register it using `provideHttpClient()` in `app.config.ts`.
* Inject it using `inject(HttpClient)` or constructor injection.
* `HttpClient` returns an `Observable`.
* An Observable is **not the actual data**.
* Calling `subscribe()` starts listening to the Observable and, for `HttpClient`, triggers the HTTP request.
* The API response becomes available inside the `subscribe()` callback.
