import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { prisma } from "./prisma";
import type { Role } from "@/generated/prisma";

const SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "akilli-kampus-secret-key-2024"
);

export interface SessionUser {
  id: string;
  email: string;
  name: string;
  role: Role;
}

export async function createToken(user: SessionUser): Promise<string> {
  return new SignJWT({ ...user })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("7d")
    .sign(SECRET);
}

export async function verifyToken(token: string): Promise<SessionUser | null> {
  try {
    const { payload } = await jwtVerify(token, SECRET);
    return payload as unknown as SessionUser;
  } catch {
    return null;
  }
}

export async function getSession(): Promise<SessionUser | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get("session")?.value;
  if (!token) return null;
  return verifyToken(token);
}

export async function requireAuth(role?: Role): Promise<SessionUser> {
  const session = await getSession();
  if (!session) throw new Error("UNAUTHORIZED");
  if (role && session.role !== role) throw new Error("FORBIDDEN");
  return session;
}

export async function setSessionCookie(token: string) {
  const cookieStore = await cookies();
  cookieStore.set("session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });
}

export async function clearSessionCookie() {
  const cookieStore = await cookies();
  cookieStore.delete("session");
}

export async function getUserFromDb(id: string) {
  return prisma.user.findUnique({
    where: { id },
    select: { id: true, email: true, name: true, role: true, studentNo: true },
  });
}
