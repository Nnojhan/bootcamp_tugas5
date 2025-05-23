const products = [
  {
    nama: "Kamera Digital",
    harga: 1500000,
    deskripsi: "Kamera dengan resolusi tinggi.",
    gambar: "images/kamera sony.jpg",
    kategori: "elektronik"
  },
  {
    nama: "Kaos Polos",
    harga: 50000,
    deskripsi: "Kaos nyaman untuk sehari-hari.",
    gambar: "images/kaos polos.jpg",
    kategori: "pakaian"
  },
  {
    nama: "Keripik Kentang",
    harga: 15000,
    deskripsi: "Camilan renyah untuk bersantai.",
    gambar: "images/keripik.jpg",
    kategori: "makanan"
  }
];

function tampilkanProduk(data) {
  const container = document.getElementById("productList");
  container.innerHTML = "";

  if (data.length === 0) {
    container.innerHTML = `<p class="text-center">Tidak ada produk yang cocok.</p>`;
    return;
  }

  data.forEach(produk => {
    container.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card h-100 shadow-sm">
          <img src="${produk.gambar}" class="card-img-top" alt="${produk.nama}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${produk.nama}</h5>
            <p class="card-text">${produk.deskripsi}</p>
            <p class="text-primary fw-bold">Rp ${produk.harga.toLocaleString()}</p>
            <button class="btn btn-success mt-auto" onclick="beliProduk('${produk.nama}')">Beli</button>
          </div>
        </div>
      </div>
    `;
  });
}

function filterProducts() {
  const kategori = document.getElementById("filter").value;
  const searchQuery = document.getElementById("search").value.toLowerCase();

  const hasilFilter = products.filter(p => {
    const cocokKategori = kategori === "all" || p.kategori === kategori;
    const cocokNama = p.nama.toLowerCase().includes(searchQuery);
    return cocokKategori && cocokNama;
  });

  tampilkanProduk(hasilFilter);
}

function beliProduk(namaProduk) {
  alert(`Kamu memilih untuk membeli: ${namaProduk}`);
}

tampilkanProduk(products);
