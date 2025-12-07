export default function Loading() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-[#FFD60A]/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-[#FFD60A] rounded-full animate-spin"></div>
        </div>
        <p className="text-gray-400 text-sm">Yükleniyor...</p>
      </div>
    </div>
  )
}
