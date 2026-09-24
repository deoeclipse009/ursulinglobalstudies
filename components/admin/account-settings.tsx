"use client";

import { useState } from "react";
import { AlertTriangle, CheckCircle2, KeyRound, Loader2, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { EditorPublic } from "@/lib/server/editors";

type SecretField = "anthropicKey" | "geminiKey" | "githubToken";

export function AccountSettings({ initial }: { initial: EditorPublic }) {
  const [me, setMe] = useState(initial);

  return (
    <div className="container max-w-3xl space-y-8 py-10">
      <div>
        <h1 className="font-serif text-3xl font-bold text-ink">My account</h1>
        <p className="mt-1 text-sm text-ink/60">
          Signed in as <strong>{me.username}</strong>. Your keys are encrypted and only used when you format or publish.
        </p>
      </div>

      {me.mustChangePassword && (
        <Banner tone="warn">
          You're using a temporary password. Choose your own password below before you can publish.
        </Banner>
      )}

      <PasswordCard onChanged={() => setMe({ ...me, mustChangePassword: false })} highlight={me.mustChangePassword} />
      <KeysCard me={me} onSaved={setMe} />
    </div>
  );
}

function PasswordCard({ onChanged, highlight }: { onChanged: () => void; highlight: boolean }) {
  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");
  const [confirm, setConfirm] = useState("");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (next !== confirm) return setMsg({ ok: false, text: "The new passwords don't match." });
    setBusy(true);
    setMsg(null);
    const res = await fetch("/api/admin/account/password", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ currentPassword: current, newPassword: next }),
    });
    const data = await res.json().catch(() => ({}));
    setBusy(false);
    if (!res.ok) return setMsg({ ok: false, text: data.error ?? "Couldn't change the password." });
    setCurrent("");
    setNext("");
    setConfirm("");
    setMsg({ ok: true, text: "Password changed. Other devices have been signed out." });
    onChanged();
  }

  return (
    <Card title="Password" highlight={highlight}>
      <form onSubmit={submit} className="grid gap-4 sm:grid-cols-3">
        <Field label={highlight ? "Temporary password" : "Current password"}>
          <Input type="password" autoComplete="current-password" value={current} onChange={(e) => setCurrent(e.target.value)} required />
        </Field>
        <Field label="New password (10+ characters)">
          <Input type="password" autoComplete="new-password" minLength={10} value={next} onChange={(e) => setNext(e.target.value)} required />
        </Field>
        <Field label="Repeat new password">
          <Input type="password" autoComplete="new-password" value={confirm} onChange={(e) => setConfirm(e.target.value)} required />
        </Field>
        <div className="sm:col-span-3 flex items-center gap-4">
          <Button type="submit" disabled={busy}>
            {busy ? <Loader2 className="animate-spin" /> : <KeyRound />} Change password
          </Button>
          {msg && <span className={msg.ok ? "text-sm text-cat-environment" : "text-sm text-cat-health"}>{msg.text}</span>}
        </div>
      </form>
    </Card>
  );
}

function KeysCard({ me, onSaved }: { me: EditorPublic; onSaved: (e: EditorPublic) => void }) {
  const [displayName, setDisplayName] = useState(me.displayName);
  const [repo, setRepo] = useState(me.githubRepo ?? "");
  const [branch, setBranch] = useState(me.githubBranch || "main");
  // undefined = keep what's saved, "" = remove, text = replace
  const [secrets, setSecrets] = useState<Partial<Record<SecretField, string>>>({});
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [github, setGithub] = useState<string | null>(null);

  async function save(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setMsg(null);
    setGithub(null);
    const res = await fetch("/api/admin/account", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ displayName, githubRepo: repo, githubBranch: branch, ...secrets }),
    });
    const data = await res.json().catch(() => ({}));
    setBusy(false);
    if (!res.ok) return setMsg({ ok: false, text: data.error ?? "Couldn't save." });
    onSaved(data.editor);
    setSecrets({});
    setGithub(data.github);
    setMsg({ ok: true, text: "Saved." });
  }

  const secretInput = (field: SecretField, label: string, placeholder: string, help: React.ReactNode) => {
    const saved = me[field];
    const value = secrets[field];
    return (
      <Field label={label}>
        <div className="flex gap-2">
          <Input
            type="password"
            autoComplete="off"
            placeholder={value === "" ? "Will be removed on save" : saved ? `Saved: ${saved} (paste to replace)` : placeholder}
            value={value ?? ""}
            onChange={(e) => setSecrets({ ...secrets, [field]: e.target.value })}
          />
          {saved && value !== "" && (
            <Button type="button" variant="outline" size="sm" className="h-10" onClick={() => setSecrets({ ...secrets, [field]: "" })}>
              Remove
            </Button>
          )}
        </div>
        <p className="text-xs text-ink/50">{help}</p>
      </Field>
    );
  };

  return (
    <Card title="Your AI keys and GitHub">
      <form onSubmit={save} className="space-y-5">
        <Field label="Name shown on your commits">
          <Input value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
        </Field>
        {secretInput(
          "anthropicKey",
          "Claude API key",
          "sk-ant-…",
          <>From <a className="text-brand underline" href="https://console.anthropic.com/settings/keys" target="_blank" rel="noreferrer">console.anthropic.com → API keys</a>. Used by the "Format with AI" button.</>,
        )}
        {secretInput(
          "geminiKey",
          "Gemini API key (optional)",
          "AIza…",
          <>From <a className="text-brand underline" href="https://aistudio.google.com/apikey" target="_blank" rel="noreferrer">Google AI Studio</a>. Adds Gemini as a second choice.</>,
        )}
        {secretInput(
          "githubToken",
          "GitHub token",
          "github_pat_…",
          <>
            <a className="text-brand underline" href="https://github.com/settings/personal-access-tokens/new" target="_blank" rel="noreferrer">Create a fine-grained token</a>:
            only the website repository, permission <strong>Contents: Read and write</strong>.
          </>,
        )}
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="sm:col-span-2">
            <Field label="Website repository (owner/name)">
              <Input placeholder="deoeclipse009/ursulinglobalstudies" value={repo} onChange={(e) => setRepo(e.target.value)} />
            </Field>
          </div>
          <Field label="Branch">
            <Input value={branch} onChange={(e) => setBranch(e.target.value)} />
          </Field>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Button type="submit" variant="brand" disabled={busy}>
            {busy ? <Loader2 className="animate-spin" /> : <Save />} Save
          </Button>
          {msg && <span className={msg.ok ? "text-sm text-cat-environment" : "text-sm text-cat-health"}>{msg.text}</span>}
        </div>
        {github && <Banner tone={github.startsWith("OK") ? "ok" : "warn"}>GitHub check: {github}</Banner>}
      </form>
    </Card>
  );
}

function Card({ title, children, highlight }: { title: string; children: React.ReactNode; highlight?: boolean }) {
  return (
    <section className={`rounded-2xl border bg-paper p-6 shadow-sm ${highlight ? "border-brand" : "border-ink/10"}`}>
      <h2 className="mb-5 text-lg font-bold text-ink">{title}</h2>
      {children}
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      {children}
    </div>
  );
}

export function Banner({ tone, children }: { tone: "ok" | "warn"; children: React.ReactNode }) {
  return (
    <div
      className={`flex items-start gap-2 rounded-xl border p-4 text-sm text-ink ${
        tone === "ok" ? "border-cat-environment/40 bg-positive/20" : "border-warn bg-warn/30"
      }`}
    >
      {tone === "ok" ? (
        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-cat-environment" />
      ) : (
        <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0" />
      )}
      <div>{children}</div>
    </div>
  );
}
