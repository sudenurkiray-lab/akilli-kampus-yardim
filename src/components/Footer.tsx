export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} Akıllı Kampüs Yardım ve Şikayet Sistemi
        </p>
        <p className="mt-1">Üniversite öğrencileri için kampüs destek platformu</p>
      </div>
    </footer>
  );
}
