# Qlik Mashup React Boilerplate
This is a boilerplate for Qlik Sense Server Mashups. It uses React, Sass, and Webpack.

Created by **Josh Asi**

## Initial Set Up

`git clone https://github.com/josh-asi/qlik-mashup-react-boilerplate.git`

then

`cd qlik-mashup-react-boilerplate && npm i`

## Steps

1. Go to **dev hub** (_{qlik-server}_/dev-hub)
2. Go to the **mashup editor** (on the left hand side)
3. Create a new project with your desired name
4. Choose any mashup template
5. Add these new files (using the + button on the mashup editor - right hand side of the screen)
   - main.js
   - runtime.js
   - vendors.js
   - main.css
6. Copy all of the contents of your .qext file on **devhub** to _config/Mashup.qext_ (local directory)
7. On your local directory, rename _Mashup.qext_ to be the same as your mashup name
8. Replace all instances of _Mashup_ to be _{mashup_name}_ on *config/wbfolder.wbl*. You can also add other files you want to view on the Mashup editor such as main.js *(optional)*
9. In the **config.js** file under webpack, replace the _{server_name}_ and _{mashup_name}_ with your server name and mashup name

10. In **webpack.common.js**, change the following
    - HtmlWebpackPlugin -> filename -> "./{mashup_name}.html"
    - CopyPlugin -> Change only the "_Mashup.qext_" in **from** and **to**, to be "{mashup_name}.qext"

11. Run `npm start` and view your mashup on {server_name}/extensions/{mashup_name}/{mashup_name.html}

## Build (production)

If you want an optimised React production build, simply run `npm run build`.
Make sure you have changed the output path in **webpack/config.js**.

If you have a different production server, you must **follow Steps 1-5 again** on your production server.

## Troubleshooting

- Failed to load resources: Make sure you have manually added the files in Step 5 using the Mashup editor

## Known Limitations

- Calling the Qlik APIs using the Qlik object does not work properly on IE11
- You have to manually refresh the page every time you make a change to see your changes

## Contact

If you've got any questions, please contact me at [josh.asi@waitematadhb.govt.nz.](mailto:josh.asi@waitematadhb.govt.nz?subject=Qlik%20React%20Mashup)

## License

This project is licensed under the ISC license, Copyright (c) 2019 Josh Asi. For more information see LICENSE.md.
