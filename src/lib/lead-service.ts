/**
 * submitLead – universal lead submission helper.
 *
 * The Next.js project uses `output: "export"` (fully static).
 * Therefore /api/lead does NOT exist on the deployed site (Hostinger).
 * All form submissions go to /send-lead.php which runs on Hostinger PHP.
 *
 * For local development, /api/lead is tried as fallback.
 */
export async function submitLead(
  payload: Record<string, unknown>
): Promise<{ success: boolean; message?: string }> {
  const endpoints = ["/send-lead.php", "/api/lead"];

  for (const url of endpoints) {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const contentType = res.headers.get("content-type") || "";
      if (contentType.includes("application/json")) {
        const data = await res.json();
        if (res.ok && data.success) {
          return { success: true, message: data.message };
        }
      }
    } catch (err) {
      console.warn(`Lead submission to ${url} failed:`, err);
    }
  }

  throw new Error("Failed to submit inquiry. Please WhatsApp us directly.");
}
