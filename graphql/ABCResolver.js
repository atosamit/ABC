const resolvers = {
  Query: {
    getPremiumAdjustment: (_, { id }) => {
      // Placeholder sample data
      return {
        id,
        Comment_M: "Sample comment",
        Total_Borrower_Fees_M: 150.0,
        CU_Retail_Rate: 3.5,
        Protected_Loan_Amount_M: 1000.0,
        Pay_Rate: 2.5,
        Premium_Due: 50.0,
        Total_Amount: 1250.0,
      };
    },
  },
  Mutation: {
    editPremiumAdjustment: (_, { id, input }) => {
      // In a real-world scenario, the input data would be used to edit existing data sources
      console.log(`Editing premium adjustment with ID: ${id}`);
      console.log("New data input:", input);

      // Simulate edited data (returning input as the new state of the object)
      return {
        id,
        ...input,
      };
    },
  },
};

export default resolvers;