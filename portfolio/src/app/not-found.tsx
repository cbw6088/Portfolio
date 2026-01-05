export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">404</h1>
        <p className="mt-2 text-gray-600">페이지를 찾을 수 없습니다.</p>
        <a href="/" className="mt-4 inline-block text-orange-600 font-LilitaOne tracking-wider">
          홈으로
        </a>
      </div>
    </div>
  );
}
