## React + TypeScript labs 2026

## Running Storybook

All of the examples are exposed as stories. To run Storybook, execute the following from your command line.

```bash
npm run storybook
```

## Running Examples

If Storybook is not working for you for some reason, this project includes multiple examples and labs that cover using TypeScript with React.

```bash
npm run examples
```

This will launch an interactive menu where you can:

- Use **↑↓ arrow keys** to navigate through available examples
- Press **Enter** to select an example
- Press **Ctrl+C** or **Esc** to quit

The CLI will automatically update `index.html` to load the selected example. After selecting, run `npm run dev` to start the development server.

Once you've selected an example, start the server:

```bash
npm run dev
```

## Other notes

- One of the hardest parts of what FE engineering do for living is deal with the fact that everything is Asynchronous
  you might fetching some other stuff outside of ur codebase

### What is a common runtime issue that can occur when a backend API changes the format of empty values (for example, from an empty array to null) that TypeScript cannot catch?

TypeScript can only provide type safety at compile time, not at runtime.
When an external API changes the format of data (such as changing empty arrays to null), methods like .map() and .forEach() will start throwing errors in production, even though TypeScript considers the code type-safe.

This is because TypeScript cannot verify that data received from external sources at runtime actually matches the expected types.

### Zod validation lib

- Validation libraries like Zod allow you to check at runtime whether data from untrusted external sources matches the expected schema/type.

Instead of manually checking with conditions like Array.isArray() and null checks, you can create schemas that validate the structure and types of incoming data, ensuring it matches your expectations before using it in your application.

- The .parse() method is used to validate data against a Zod schema. If the validation fails, it will throw an error. This allows for early detection of invalid data rather than checking for undefined values throughout the codebase.

### How can you ensure that a Zod schema correctly matches an existing TypeScript type?

You can use the satisfies keyword with the z.ZodType utility type. For example: const postSchema = z.object({...}) satisfies z.ZodType<Post>. This ensures the schema definition correctly validates the expected type.

### three common use cases where Zod schemas provide value for runtime validation?

1. Form validation to ensure user input matches expected types

2) API requests to validate data from external services

3) Local storage to verify data retrieved from storage is in the expected format. These are all cases where you're touching something outside your codebase.

## the benefit of using Zod schemas to provide both compile-time and runtime safety?

Zod schemas provide compile-time safety through TypeScript types and runtime safety through validation.

This ensures that data from external sources (APIs, user input, local storage) actually matches the EXPECTED structure at RUNTIME, preventing issues like trying to parse HTML as JSON or accessing properties that don't exist.
