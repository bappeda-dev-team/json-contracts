# json-contracts
Json Contract for KertasKerja

# RUNNING
1. `npm install`

2. `npm start`

# ROUTE

## ALL
GET http://localhost:5019/pohon_kinerja_pemda

## BY TAHUN (DROPDOWN)
GET http://localhost:5019/pohon_kinerja_pemda/tahun/2026

## POKIN BY ID
GET http://localhost:5019/pohon_kinerja_pemda/1

## SHOW POKIN (UNTUK POHON KINERJA TEMATIK)
GET http://localhost:5019/pohon_kinerja_pemda/1/show_pokin

## CREATE POKIN TEMATIK
POST http://localhost:5019/pohon_kinerja_pemda

``` json
{
  "nama_pohon_kinerja": "Tema Y",
  "jenis_pohon_kinerja": "Tematik",
  "keterangan": "tema baru dari API",
  "tahun": 2027,
  "jenis_child": "SubTema",
"indikators": [
      {
        "id": 1,
        "indikator": "Indikator Baru 1",
        "tahun": 2027,
        "targets": [
          { "id": 1, "target": 30, "satuan": "%", "tahun": 2027 },
          { "id": 2, "target": 50, "satuan": "%", "tahun": 2027 }
        ]
      }
    ]
}
```
