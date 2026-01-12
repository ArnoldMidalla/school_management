import { Adapter } from "next-auth/adapters";
import { query } from "@/lib/db";

export function PostgresAdapter(): Adapter {
  return {
    async createUser(user) {
      const res = await query(
        `INSERT INTO users (name, email, image)
         VALUES ($1, $2, $3)
         RETURNING *`,
        [user.name, user.email, user.image]
      );
      return res.rows[0];
    },

    async getUserByEmail(email) {
      const res = await query(
        `SELECT * FROM users WHERE email = $1`,
        [email]
      );
      return res.rows[0] ?? null;
    },

    async getUser(id) {
      const res = await query(
        `SELECT * FROM users WHERE id = $1`,
        [id]
      );
      return res.rows[0] ?? null;
    },

    async linkAccount(account) {
      await query(
        `INSERT INTO accounts
         (user_id, provider, provider_account_id, type, access_token, id_token)
         VALUES ($1, $2, $3, $4, $5, $6)`,
        [
          account.userId,
          account.provider,
          account.providerAccountId,
          account.type,
          account.access_token,
          account.id_token,
        ]
      );
    },

    async createSession(session) {
      const res = await query(
        `INSERT INTO sessions (session_token, user_id, expires)
         VALUES ($1, $2, $3)
         RETURNING *`,
        [session.sessionToken, session.userId, session.expires]
      );
      return res.rows[0];
    },

    async getSessionAndUser(sessionToken) {
      const res = await query(
        `SELECT s.*, u.*
         FROM sessions s
         JOIN users u ON u.id = s.user_id
         WHERE s.session_token = $1`,
        [sessionToken]
      );

      if (!res.rows.length) return null;

      const row = res.rows[0];
      return {
        session: {
          sessionToken: row.session_token,
          userId: row.user_id,
          expires: row.expires,
        },
        user: row,
      };
    },

    async deleteSession(sessionToken) {
      await query(
        `DELETE FROM sessions WHERE session_token = $1`,
        [sessionToken]
      );
    },
  };
}
