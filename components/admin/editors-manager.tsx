"use client";

import { useCallback, useEffect, useState } from "react";
import { Copy, Loader2, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Banner } from "@/components/admin/account-settings";
import type { EditorPublic } from "@/lib/server/editors";

type Action = "resetPassword" | "disable" | "enable" | "makeAdmin" | "removeAdmin";

export function EditorsManager({ databaseReady, myId, isRoot }: { databaseReady: boolean; myId: string | null; isRoot: boolean }) {
  const [editors, setEditors] = useState<EditorPublic[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [handover, setHandover] = useState<{ username: string; password: string } | null>(null);

  const load = useCallback(async () => {
    const res = await fetch("/api/admin/editors");
    const data = await res.json().catch(() => ({}));
    if (!res.ok) return setError(data.error ?? "Couldn't load editors.");
    setEditors(data.editors);
  }, []);

  useEffect(() => {
    if (databaseReady) void load();
  }, [databaseReady, load]);

  async function act(editor: EditorPublic, action: Action | "delete") {
    if (action === "delete" && !confirm(`Delete ${editor.username}? This can't be undone.`)) return;
    if (action === "resetPassword" && !confirm(`Reset ${editor.username}'s password? They'll be signed out.`)) return;
    setError(null);
    const res = await fetch(`/api/admin/editors/${editor.id}`, {
      method: action === "delete" ? "DELETE" : "PATCH",
      headers: { "content-type": "application/json" },
      body: action === "delete" ? undefined : JSON.stringify({ action }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) return setError(data.error ?? "That didn't work.");
    if (data.tempPassword) setHandover({ username: editor.username, password: data.tempPassword });
    await load();
  }

  return (
    <div className="container max-w-5xl space-y-8 py-10">
      <div>
        <h1 className="font-serif text-3xl font-bold text-ink">Editors</h1>
        <p className="mt-1 text-sm text-ink/60">
          Invite editors, reset passwords, and turn access on or off. Each editor adds their own API keys and GitHub token on
          their account page.
        </p>
      </div>

      {!databaseReady && (
        <Banner tone="warn">
          Editor accounts need a database. Connect Supabase and set <code>SUPABASE_URL</code>,{" "}
          <code>SUPABASE_SERVICE_ROLE_KEY</code> and <code>SECRETS_ENCRYPTION_KEY</code> (see <code>docs/ADMIN.md</code>).
        </Banner>
      )}
      {isRoot && databaseReady && (
        <Banner tone="warn">
          You're signed in with the head admin password, which can only manage editors. To format and publish articles, create an
          editor account for yourself (tick "Admin"), then sign in with it.
        </Banner>
      )}
      {error && <Banner tone="warn">{error}</Banner>}
      {handover && <Handover {...handover} onClose={() => setHandover(null)} />}

      {databaseReady && (
        <>
          <InviteForm
            onCreated={async (username, password) => {
              setHandover({ username, password });
              await load();
            }}
          />

          <section className="overflow-hidden rounded-2xl border border-ink/10 bg-paper shadow-sm">
            {editors === null ? (
              <p className="flex items-center gap-2 p-6 text-sm text-ink/60">
                <Loader2 className="h-4 w-4 animate-spin" /> Loading…
              </p>
            ) : editors.length === 0 ? (
              <p className="p-6 text-sm text-ink/60">No editors yet.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-feed/60 text-xs uppercase tracking-wide text-ink/60">
                    <tr>
                      <th className="px-4 py-3">Editor</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3">Set up</th>
                      <th className="px-4 py-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {editors.map((e) => {
                      const self = e.id === myId;
                      return (
                        <tr key={e.id} className="border-t border-ink/10 align-top">
                          <td className="px-4 py-3">
                            <p className="font-semibold text-ink">{e.displayName}</p>
                            <p className="text-ink/60">
                              {e.username}
                              {self && " (you)"}
                            </p>
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex flex-wrap gap-1">
                              {e.disabled ? <Pill tone="bad">Disabled</Pill> : <Pill tone="good">Active</Pill>}
                              {e.isAdmin && <Pill tone="info">Admin</Pill>}
                              {e.mustChangePassword && <Pill tone="warn">Temp password</Pill>}
                            </div>
                          </td>
                          <td className="px-4 py-3 text-ink/70">
                            <p>AI key: {e.anthropicKey || e.geminiKey ? "yes" : "no"}</p>
                            <p>GitHub: {e.githubToken && e.githubRepo ? e.githubRepo : "no"}</p>
                          </td>
                          <td className="px-4 py-3">
                            {self ? (
                              <p className="text-right text-xs text-ink/50">Use My account</p>
                            ) : (
                              <div className="flex flex-wrap justify-end gap-2">
                                <Button size="sm" variant="outline" onClick={() => act(e, "resetPassword")}>
                                  Reset password
                                </Button>
                                <Button size="sm" variant="outline" onClick={() => act(e, e.isAdmin ? "removeAdmin" : "makeAdmin")}>
                                  {e.isAdmin ? "Remove admin" : "Make admin"}
                                </Button>
                                <Button size="sm" variant="outline" onClick={() => act(e, e.disabled ? "enable" : "disable")}>
                                  {e.disabled ? "Enable" : "Disable"}
                                </Button>
                                <Button size="sm" variant="ghost" className="text-cat-health" onClick={() => act(e, "delete")}>
                                  Delete
                                </Button>
                              </div>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        </>
      )}
    </div>
  );
}

function InviteForm({ onCreated }: { onCreated: (username: string, password: string) => Promise<void> }) {
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const res = await fetch("/api/admin/editors", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ username, displayName, isAdmin }),
    });
    const data = await res.json().catch(() => ({}));
    setBusy(false);
    if (!res.ok) return setError(data.error ?? "Couldn't create the editor.");
    setUsername("");
    setDisplayName("");
    setIsAdmin(false);
    await onCreated(data.editor.username, data.tempPassword);
  }

  return (
    <section className="rounded-2xl border border-ink/10 bg-paper p-6 shadow-sm">
      <h2 className="mb-5 text-lg font-bold text-ink">Invite an editor</h2>
      <form onSubmit={submit} className="flex flex-wrap items-end gap-4">
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input id="username" placeholder="e.g. cherry" value={username} onChange={(e) => setUsername(e.target.value.toLowerCase())} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="displayName">Full name</Label>
          <Input id="displayName" placeholder="e.g. Cherry W." value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
        </div>
        <label className="flex items-center gap-2 pb-2 text-sm text-ink/80">
          <input type="checkbox" checked={isAdmin} onChange={(e) => setIsAdmin(e.target.checked)} /> Admin (can manage editors)
        </label>
        <Button type="submit" disabled={busy} className="ml-auto">
          {busy ? <Loader2 className="animate-spin" /> : <UserPlus />} Create account
        </Button>
      </form>
      {error && <p className="mt-3 text-sm text-cat-health">{error}</p>}
    </section>
  );
}

function Handover({ username, password, onClose }: { username: string; password: string; onClose: () => void }) {
  const text = `UGS newsroom admin\nSign in: ${typeof window !== "undefined" ? window.location.origin : ""}/admin/login\nUsername: ${username}\nTemporary password: ${password}\nYou'll be asked to choose your own password and add your API keys.`;
  return (
    <div className="rounded-2xl border border-brand bg-brand/[0.04] p-6">
      <p className="font-semibold text-ink">Give these to {username}. The password is shown only once.</p>
      <pre className="mt-3 whitespace-pre-wrap rounded-lg bg-paper p-4 font-mono text-sm text-ink">{text}</pre>
      <div className="mt-3 flex gap-2">
        <Button size="sm" variant="outline" onClick={() => navigator.clipboard.writeText(text)}>
          <Copy /> Copy
        </Button>
        <Button size="sm" variant="ghost" onClick={onClose}>
          Done
        </Button>
      </div>
    </div>
  );
}

function Pill({ tone, children }: { tone: "good" | "bad" | "warn" | "info"; children: React.ReactNode }) {
  const cls = {
    good: "bg-positive/30 text-ink",
    bad: "bg-callout/30 text-ink",
    warn: "bg-warn/60 text-ink",
    info: "bg-brand/15 text-brand",
  }[tone];
  return <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${cls}`}>{children}</span>;
}
