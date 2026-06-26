import fs from 'fs';
import path from 'path';

const srcBase = path.join(process.cwd(), 'mansão maromba');
const destBase = path.join(process.cwd(), 'public', 'images');

const dirs = {
  logo: path.join(destBase, 'logo'),
  banner: path.join(destBase, 'banner'),
  drinks: path.join(destBase, 'drinks'),
  gin: path.join(destBase, 'gin'),
};

Object.values(dirs).forEach(d => fs.mkdirSync(d, { recursive: true }));

if (fs.existsSync(path.join(srcBase, 'LOGO.png'))) {
  fs.copyFileSync(path.join(srcBase, 'LOGO.png'), path.join(dirs.logo, 'logo.png'));
}

const mapFiles = (folder, destFolder, prefix) => {
  const srcDir = path.join(srcBase, folder);
  if (!fs.existsSync(srcDir)) return;
  const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.webp') || f.endsWith('.png'));
  
  files.forEach((f, i) => {
    let baseName = f.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ /g, '-').replace('.png', '').replace('.webp', '');
    const ext = path.extname(f);
    let newName = `${prefix}-${baseName}${ext}`;
    
    // For banner, we want the most premium one as hero-banner
    if (folder === 'Banner' && i === 0) {
      newName = `hero-banner${ext}`;
    } else if (folder === 'Banner') {
      newName = `banner-${baseName}${ext}`;
    }

    fs.copyFileSync(path.join(srcDir, f), path.join(destFolder, newName));
  });
};

mapFiles('Banner', dirs.banner, 'banner');
mapFiles('Drink', dirs.drinks, 'drink');
mapFiles('Gin', dirs.gin, 'gin');

console.log("Arquivos copiados e padronizados com sucesso na pasta public/images/");
