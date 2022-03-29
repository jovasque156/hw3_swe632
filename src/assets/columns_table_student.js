export const columns_student = [
  {
    Header: 'Riesgo',
    accessor: 'Riesgo',
    width: 80,
    disableResizing: true,
    Cell: ({ cell }) => {
      const { value } = cell;

      const pickColor = (value) => {
        let risk = value
        let color = ''

        switch (true) {
          case (risk >= 69):
              color = '#bf2626'
              break;
          case (risk >= 33):
              color = '#32a94c'
              break;
          default:
              color = '#14a9ff'
              break
      }
        return color;
      };

      return (
        <div style={{ textAlign: 'center', fontSize: 18 }}>
          <b><font color= {pickColor(value)}>{value}</font></b>
        </div>
      );
    },
  },  
  {
    Header: 'ID Estudiante',
    accessor: 'ID Estudiante',
    width: 130,
    disableResizing: true,
  },
  
  {
    Header: 'Nombre',
    accessor: 'Nombre',
    width: 170,
    disableResizing: true,
  },
  {
    Header: 'email',
    accessor: 'email',
    width: 200,
    disableResizing: true,
  },
  {
    Header: 'Programa',
    accessor: 'Programa',
    width: 100,
    disableResizing: true,
  },
  {
    Header: 'Genero',
    accessor: 'Genero',
    width: 130,
    disableResizing: true,
  },
  {
    Header: 'Creditos Aprobados',
    accessor: 'Creditos Aprobados',
    width: 130,
    disableResizing: true,
    Cell: ({ cell }) => {
      const { value } = cell;
      return (
        <div style={{ textAlign: 'center' }}>
          {value}
        </div>
      );
    },
  },

  {
    Header: 'Creditos Reprobados',
    accessor: 'Creditos Reprobados',
    width: 130,
    disableResizing: true,
    Cell: ({ cell }) => {
      const { value } = cell;
      return (
        <div style={{ textAlign: 'center' }}>
          {value}
        </div>
      );
    },
  },
  {
    Header: 'Evaluación Docente',
    accessor: 'Evaluación Docente',
    width: 130,
    disableResizing: true,
    Cell: ({ cell }) => {
      const { value } = cell;
      return (
        <div style={{ textAlign: 'center' }}>
          {value}
        </div>
      );
    },
  },
    
]

 