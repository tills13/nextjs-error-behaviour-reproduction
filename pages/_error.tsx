import { useEffect } from "react";

export default function ErrorPage({ errorText }) {
  useEffect(() => console.log("ere"), []);
  return <>{errorText}</>;
}

ErrorPage.getInitialProps = async (ctx) => {
  console.log(ctx.req?.url, ctx.err);

  if (typeof window !== "undefined") {
    await new Promise((r) => setTimeout(r, 10 * 1000));
  }

  if (ctx.res) {
    ctx.res.statusCode = ctx.err?.statusCode ?? 500;
  }

  return {
    errorText: ctx.err?.message || "an unknown error occured",
  };
};
