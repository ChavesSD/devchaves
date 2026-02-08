# Script para subir apenas o portfólio para https://github.com/ChavesSD/dev.chaves.git
# Execute no PowerShell a partir da pasta do portfólio:
#   cd "F:\Dev Projects\Outros\Portifólio"
#   .\deploy-github.ps1

$ErrorActionPreference = "Stop"
$repoUrl = "https://github.com/ChavesSD/dev.chaves.git"

# Garantir que estamos na pasta do script
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $scriptDir

# Remover .git antigo se existir (para começar limpo)
if (Test-Path .git) {
    Write-Host "Removendo .git existente..."
    Remove-Item -Recurse -Force .git
}

Write-Host "Inicializando repositório Git..."
git init

Write-Host "Adicionando arquivos..."
git add .

Write-Host "Criando commit..."
git commit -m "Portfólio Deyvison Chaves - versão inicial"

Write-Host "Configurando remote..."
git remote add origin $repoUrl

Write-Host "Renomeando branch para main..."
git branch -M main

Write-Host "Enviando para o GitHub..."
git push -u origin main

Write-Host "Concluído! Repositório: $repoUrl"
