# Global Loading Spinner using HTTP Interceptor

## Problem

Suppose you have 100 API calls.

Without an interceptor, every component would need:

```ts
loading = true;

this.http.get('/users').subscribe({
  next: (data) => {
    this.users = data;
    loading = false;
  },
  error: () => {
    loading = false;
  }
});
```

Imagine writing this in every component.

This is repetitive and hard to maintain.

---

## Enterprise Solution

Use an HTTP Interceptor.

```
Component
      │
      ▼
HttpClient
      │
      ▼
HTTP Interceptor
      │
      ├── Show Spinner
      ▼
Backend API
      │
      ▼
Response
      │
      ▼
Hide Spinner
      │
      ▼
Component Receives Data
```

The component doesn't know anything about the spinner.

---

## Step 1: Create a Loading Service

```ts
@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  loading = signal(false);

  show() {
    this.loading.set(true);
  }

  hide() {
    this.loading.set(false);
  }

}
```

---

## Step 2: Create an HTTP Interceptor

```ts
export const loadingInterceptor: HttpInterceptorFn = (
  req,
  next
) => {

  const loadingService = inject(LoadingService);

  loadingService.show();

  return next(req).pipe(

    finalize(() => {

      loadingService.hide();

    })

  );

};
```

The `finalize()` operator always runs whether the request succeeds or fails.

---

## Step 3: Register the Interceptor

```ts
provideHttpClient(
  withInterceptors([
    loadingInterceptor
  ])
)
```

Now every HTTP request automatically passes through the interceptor.

---

## Step 4: Spinner Component

```html
@if (loadingService.loading()) {
  <div class="spinner">
    Loading...
  </div>
}
```

---

## What Happens?

When the API starts:

```
Component
      │
      ▼
HttpClient
      │
      ▼
Interceptor
      │
      ▼
loadingService.show()

loading = true

Spinner Visible
```

When the API finishes:

```
API Response
      │
      ▼
finalize()
      │
      ▼
loadingService.hide()

loading = false

Spinner Hidden
```

---

## If Multiple APIs Run Together

```
Dashboard

├── GET /users
├── GET /roles
├── GET /permissions
├── GET /settings
```

Every request goes through the interceptor.

In production applications, the loading service often maintains a request counter:

```
Request Started
counter++

Request Finished
counter--

Spinner hides only when counter = 0
```

This prevents the spinner from disappearing while other requests are still in progress.

---

## Advantages

* No duplicate loading code in components.
* One place to manage loading behavior.
* Works for every API automatically.
* Easy to maintain.
* Enterprise-standard approach.

---

## Real Enterprise Flow

```
User Clicks Button
        │
        ▼
Component
        │
        ▼
HttpClient
        │
        ▼
HTTP Interceptor
        │
        ├── Show Spinner
        ▼
Backend API
        │
        ▼
Response
        │
        ├── Hide Spinner
        ▼
Component Receives Data
        │
        ▼
UI Updates
```

This is the approach commonly used in enterprise Angular applications because it centralizes loading logic and keeps components focused on business functionality.
