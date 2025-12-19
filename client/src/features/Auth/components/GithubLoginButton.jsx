const GoogleLoginButton = () => {
    const handleGoogleLogin = () => {
      window.location.href = `${import.meta.env.VITE_API_URL}/auth/google`;
    };
  
    return (
      <button
        onClick={handleGoogleLogin}
        className="w-full border py-3 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-3"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          {/* Google SVG */}
        </svg>
        <span>Đăng nhập bằng Google</span>
      </button>
    );
  };