$root = 'C:\Users\hanna\OneDrive\Desktop\Meus exercícios\exercic-o-de-JavaScript-1'
$map = @{
  '01-condicionais/comissao-vendas.js' = 'código.js'
  '01-condicionais/switch-dificuldade.js' = 'código2.js'
  '02-matrizes/soma-de-matriz.js' = 'execício26.js'
  '02-matrizes/contar-maiores-em-matriz.js' = 'exercício1.js'
  '02-matrizes/acessar-elementos-matriz.js' = 'exercícioMatriz2.js'
  '02-matrizes/matriz-3.js' = 'exercíciomatriz3.js'
  '02-matrizes/matriz-4.js' = 'exercícioMatriz4.js'
  '03-ordenacao-busca/ordenacao-selecao.js' = 'exercícioordenação.js'
  '03-ordenacao-busca/ordenacao-selecao-1.js' = 'exercícioordenação1.js'
  '03-ordenacao-busca/busca-binaria-1.js' = 'exercíciobuscabinária1.js'
  '03-ordenacao-busca/busca-binaria-2.js' = 'exercíciobuscabinária5.js'
  '03-ordenacao-busca/busca-binaria-3.js' = 'Exercícios de lógica\exercecíciomatriz.js\exercíciordenação2.js'
  '04-logica-geral/exercicio-5.js' = 'exercicício5.js'
  '04-logica-geral/exercicio-geral.js' = 'exercício.js'
  '04-logica-geral/exercicio-3.js' = 'exercício3.js'
  '04-logica-geral/exercicio-4.js' = 'exercício4.js'
  '04-logica-geral/exercicio-6.js' = 'exercício6.js'
  '04-logica-geral/exercicio-7.js' = 'exercício7.js'
  '04-logica-geral/exercicio-8.js' = 'exercício8.js'
  '04-logica-geral/exercicio-9.js' = 'exercício9.js'
  '04-logica-geral/exercicio-10.js' = 'exercício10.js'
  '04-logica-geral/exercicio-11.js' = 'exercício11.js'
  '04-logica-geral/exercicio-12.js' = 'exercício12.js'
  '04-logica-geral/exercicio-13.js' = 'exercício13.js'
  '04-logica-geral/exercicio-14.js' = 'exercício14.js'
  '04-logica-geral/exercicio-15.js' = 'exercício15.js'
  '04-logica-geral/exercicio-16.js' = 'exercício16.js'
  '04-logica-geral/exercicio-17.js' = 'exercício17.js'
  '04-logica-geral/exercicio-18.js' = 'exercício18.js'
  '04-logica-geral/exercicio-19.js' = 'exercício19.js'
  '04-logica-geral/exercicio-20.js' = 'exercício20.js'
  '04-logica-geral/exercicio-21.js' = 'exercício21.js'
  '04-logica-geral/exercicio-22.js' = 'exercício22.js'
  '04-logica-geral/exercicio-23.js' = 'exercício23.js'
  '04-logica-geral/exercicio-24.js' = 'exercício24.js'
  '04-logica-geral/exercicio-25.js' = 'exercício25.js'
  '00-docs/README.md' = 'README.md'
  '00-docs/LICENSE' = 'LICENSE'
}
foreach ($rel in $map.Keys) {
  $src = Join-Path $root $rel
  $dest = Join-Path $root $map[$rel]
  if (Test-Path $src) { Move-Item -LiteralPath $src -Destination $dest -Force }
}
Remove-Item -LiteralPath (Join-Path $root '00-docs') -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -LiteralPath (Join-Path $root '01-condicionais') -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -LiteralPath (Join-Path $root '02-matrizes') -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -LiteralPath (Join-Path $root '03-ordenacao-busca') -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -LiteralPath (Join-Path $root '04-logica-geral') -Recurse -Force -ErrorAction SilentlyContinue
