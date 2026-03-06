"use client";

import { useEffect } from "react";

export default function NetlifyIdentityRedirect() {
  useEffect(() => {
    // @ts-expect-error netlifyIdentity is loaded via script tag
    if (window.netlifyIdentity) {
      // @ts-expect-error netlifyIdentity is loaded via script tag
      window.netlifyIdentity.on("init", (user: unknown) => {
        if (!user) {
          // @ts-expect-error netlifyIdentity is loaded via script tag
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  }, []);

  return null;
}
