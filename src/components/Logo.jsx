function Logo() {
  return (
    <svg width="200" height="55" viewBox="0 0 200 55" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="55" rx="10" fill="#0f0f13"/>
      <path d="M25 8 L42 15 L42 35 Q42 47 25 53 Q8 47 8 35 L8 15 Z" fill="#7c3aed" opacity="0.2"/>
      <path d="M25 11 L39 17 L39 35 Q39 45 25 50 Q11 45 11 35 L11 17 Z" fill="none" stroke="#7c3aed" strokeWidth="1.5"/>
      <rect x="18" y="30" width="14" height="11" rx="3" fill="#7c3aed"/>
      <path d="M21 30 L21 26 Q21 20 25 20 Q29 20 29 26 L29 30" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="25" cy="35" r="2" fill="white"/>
      <text x="50" y="28" fontFamily="'Segoe UI', sans-serif" fontSize="20" fontWeight="700" fill="white">Krypto</text>
      <text x="50" y="44" fontFamily="'Segoe UI', sans-serif" fontSize="10" fontWeight="300" fill="#7c3aed" letterSpacing="3">SECURE LOGIN</text>
    </svg>
  )
}

export default Logo