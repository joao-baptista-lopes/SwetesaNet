import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'Base',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/home-smile.svg',
          label: 'Início',
          route: '/dashboard',
          children: [
            { label: 'Home', route: '/dashboard/nfts' },
            { label: 'Prestadores', route: '/dashboard/podcast' },
          ],
        },

        {
          icon: 'assets/images/icon-noticia.svg',
          label: 'Imprensa',
          children:[
            { label: 'Notícias', route: '/dashboard/noticias' },
            // {label:'Cadastrar Prestadores', route: '/dashboard/cadastro'}
          ]
        },
        {
          // icon: 'assets/images/icon-noticia.svg',
          label: 'Cadastro',
          children:[
            {label:'Cadastrar Prestadores', route: '/dashboard/cadastro'}
          ]
        }

        //------------------ESTA PARTE SERÁ PARA A AUTENTICAÇÃO------------------//
        // {
        //   icon: 'assets/icons/heroicons/outline/lock-closed.svg',
        //   label: 'Auth',
        //   route: '/auth',
        //   children: [
        //     { label: 'Sign up', route: '/auth/sign-up' },
        //     { label: 'Sign in', route: '/auth/sign-in' },
        //     { label: 'Forgot Password', route: '/auth/forgot-password' },
        //     { label: 'New Password', route: '/auth/new-password' },
        //     { label: 'Two Steps', route: '/auth/two-steps' },
        //   ],
        // },
      ],
    },
    // {
    //   group: 'Config',
    //   separator: false,
    //   items: [
    //     {
    //       icon: 'assets/icons/heroicons/outline/cog.svg',
    //       label: 'Settings',
    //       route: '/settings',
    //     },
    //     {
    //       icon: 'assets/icons/heroicons/outline/bell.svg',
    //       label: 'Notifications',
    //       route: '/gift',
    //     },
    //     {
    //       icon: 'assets/icons/heroicons/outline/folder.svg',
    //       label: 'Folders',
    //       route: '/folders',
    //       children: [
    //         { label: 'Current Files', route: '/folders/current-files' },
    //         { label: 'Downloads', route: '/folders/download' },
    //         { label: 'Trash', route: '/folders/trash' },
    //       ],
    //     },
    //   ],
    // },
  ];
}
