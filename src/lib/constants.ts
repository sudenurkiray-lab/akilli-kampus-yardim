export const CAMPUS_LOCATIONS = [
  "Ana Bina",
  "Kütüphane",
  "Yemekhane",
  "Mühendislik Fakültesi",
  "Spor Salonu",
  "Öğrenci Yurdu A",
  "Öğrenci Yurdu B",
  "Bilgisayar Laboratuvarı",
  "Konferans Salonu",
  "Bahçe / Park Alanı",
] as const;

export const STATUS_LABELS: Record<string, string> = {
  YENI: "Yeni",
  INCELENIYOR: "İnceleniyor",
  COZULDU: "Çözüldü",
  REDDEDILDI: "Reddedildi",
};

export const STATUS_COLORS: Record<string, string> = {
  YENI: "bg-blue-100 text-blue-800",
  INCELENIYOR: "bg-yellow-100 text-yellow-800",
  COZULDU: "bg-green-100 text-green-800",
  REDDEDILDI: "bg-gray-100 text-gray-800",
};

export const PRIORITY_LABELS: Record<string, string> = {
  DUSUK: "Düşük",
  ORTA: "Orta",
  YUKSEK: "Yüksek",
  ACIL: "Acil",
};

export const PRIORITY_COLORS: Record<string, string> = {
  DUSUK: "bg-gray-100 text-gray-700",
  ORTA: "bg-blue-100 text-blue-700",
  YUKSEK: "bg-orange-100 text-orange-700",
  ACIL: "bg-red-100 text-red-700",
};
