import replace from "@rollup/plugin-replace"

export default  {
   plugins: [
      replace({'process.env.DB_URL':JSON.stringify(process.env.DB_URL)})
    ]
} 