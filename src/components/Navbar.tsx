import Link from "next/link";

interface NavbarProps {
  user?: { name: string; role: string } | null;
}

export default function Navbar({ user }: NavbarProps) {
  return (
    <nav className="bg-white border-b-2 border-red-600 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AK</span>
            </div>
            <span className="font-bold text-gray-900 text-lg hidden sm:block">
              Akıllı Kampüs
            </span>
          </Link>

          <div className="flex items-center gap-3">
            {user ? (
              <>
                <span className="text-sm text-gray-600 hidden sm:block">
                  Merhaba, <strong>{user.name}</strong>
                </span>
                {user.role === "ADMIN" ? (
                  <Link
                    href="/admin"
                    className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition"
                  >
                    Admin Panel
                  </Link>
                ) : (
                  <Link
                    href="/ogrenci"
                    className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition"
                  >
                    Panelim
                  </Link>
                )}
                <form action="/api/auth/logout" method="POST">
                  <button
                    type="submit"
                    className="text-gray-600 hover:text-red-600 text-sm font-medium transition"
                  >
                    Çıkış
                  </button>
                </form>
              </>
            ) : (
              <>
                <Link
                  href="/giris"
                  className="text-gray-700 hover:text-red-600 text-sm font-medium transition"
                >
                  Giriş Yap
                </Link>
                <Link
                  href="/kayit"
                  className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition"
                >
                  Kayıt Ol
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
