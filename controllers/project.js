"use-strict";

const mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "challenge-soho",
});

module.exports.getProjects = async (req, res) => {
  try {
    // const projects = [
    //     {
    //         logo: 'https://cellworld-ec.com/wp-content/uploads/2020/11/Diners-Club-International-logo-Transparente.png',
    //         img: 'https://test.mutualiac.com.ar/uploads/projectSoho/project1.png',
    //         title: 'Sitio publico y privado',
    //         description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae omnis minus fugit nisi molestias id! A dicta officiis quas nostrum perspiciatis consequatur, in doloribus, inventore blanditiis doloremque architecto, explicabo laboriosam.',
    //         tags: ['usabilidad', 'ui', 'ux', 'test con usuarios'],
    //         primaryColor: '#223B82',
    //         secondaryColor: '#FFFFFF',
    //         fontColor: '#FFFFFF'
    //     },
    //     {
    //         logo: 'https://www.siconsultoresperu.com/wp-content/uploads/2018/01/Logo-derco-1.png',
    //         img: 'https://test.mutualiac.com.ar/uploads/projectSoho/project2.png',
    //         title: 'Sitio web 2017',
    //         description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae omnis minus fugit nisi molestias id! A dicta officiis quas nostrum perspiciatis consequatur, in doloribus, inventore blanditiis doloremque architecto, explicabo laboriosam.',
    //         tags: ['responsive', 'ui 2', 'ux 2'],
    //         primaryColor: '#C92C3A',
    //         secondaryColor: '#FFFFFF',
    //         fontColor: '#FFFFFF'
    //     },
    //     {
    //         logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Copec_logo.svg/2560px-Copec_logo.svg.png',
    //         img: 'https://test.mutualiac.com.ar/uploads/projectSoho/project3.png',
    //         title: 'TV App',
    //         description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae omnis minus fugit nisi molestias id! A dicta officiis quas nostrum perspiciatis consequatur, in doloribus, inventore blanditiis doloremque architecto, explicabo laboriosam.',
    //         tags: ['usabilidad', 'ui 2', 'ux 2'],
    //         primaryColor: '#FFFFFF',
    //         secondaryColor: '#C92C3A',
    //         fontColor: '#000'
    //     }
    // ];
    // return res.status(200).json(projects)

    connection.connect(function (err) {
      if (err) {
        return;
      }
    });
    
    const sql = `SELECT * FROM proyectos`;
    connection.query(sql, (error, results) => {
      if (error) return res.status(500).send(error);
      if (results.length > 0) return res.status(200).send(results);
    });

  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
