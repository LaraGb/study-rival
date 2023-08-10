
export type aboutIconsConfigT = {
    name:string;
    svg_icon:string;
}

const aboutIconsConfig: Array<aboutIconsConfigT>= [
    {
      name: "Objeto 1",
     svg_icon:''
    },
    {
      name: "Objeto 2",
      svg_icon: `
        <svg width="78" height="72" viewBox="0 0 78 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Seu código SVG aqui -->
        </svg>
      `
    },  {
        name: "Objeto 3",
        svg_icon: `
          <svg width="78" height="72" viewBox="0 0 78 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Seu código SVG aqui -->
          </svg>
        `
      },  {
        name: "Objeto 4",
        svg_icon: `
          <svg width="78" height="72" viewBox="0 0 78 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Seu código SVG aqui -->
          </svg>
        `
      },
    // ... Adicione mais objetos com nome e SVG
  ];

export default aboutIconsConfig;