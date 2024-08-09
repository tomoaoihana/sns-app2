import { createClient } from "@supabase/supabase-js";

//createClientでsupabaseのクライアントを作成（初期化）
//なぜ初期化する？
//createClientはSupabaseClientクラスのインスタンスを作成する関数
//API接続の確立: Supabaseはデータベースや認証、ストレージなどの機能を提供するバックエンドサービスです。
//クライアントを初期化することで、これらのサービスにアクセスするための接続を確立します。
//これにより、アプリケーションからSupabaseのAPIを呼び出すことが可能になります。
export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_API_KEY
);
