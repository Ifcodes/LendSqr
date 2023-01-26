export const getUserPersonalInfo = (selectedUser: any) => {
  const labels = [
    {
      label: "Full Name",
      value: `${selectedUser?.profile?.firstName} ${selectedUser?.profile?.lastName}`,
    },
    {
      label: "Phone Number",
      value: selectedUser?.profile?.phoneNumber,
    },
    {
      label: "Email Address",
      value: selectedUser?.email,
    },
    {
      label: "BVN",
      value: selectedUser?.profile?.bvn,
    },
    {
      label: "Gender",
      value: selectedUser?.profile?.gender,
    },
    {
      label: "Marital Status",
      value: selectedUser?.maritalStatus,
    },
    {
      label: "Children",
      value: selectedUser?.children,
    },
    {
      label: "Type of Residence",
      value: selectedUser?.residenceType,
    },
  ];

  return labels;
};

export const getUserEduEmployment = (selectedUser: any) => {
  const labels = [
    {
      label: "Level of Education",
      value: selectedUser?.education?.level,
    },
    {
      label: "Employment Status",
      value: selectedUser?.education?.employmentStatus,
    },
    {
      label: "Sector of Employment",
      value: selectedUser?.education?.sector,
    },
    {
      label: "Duration of Employment",
      value: selectedUser?.education?.duration,
    },
    {
      label: "Office Email",
      value: selectedUser?.education?.officeEmail,
    },
    {
      label: "Monthly Income",
      value: `₦${Number(selectedUser?.education?.monthlyIncome[0]).toFixed(
        2
      )} - ₦${Number(selectedUser?.education?.monthlyIncome[1])?.toFixed(2)}`,
    },
    {
      label: "Loan Repayment",
      value: `₦${Number(selectedUser?.education?.loanRepayment)?.toFixed(2)}`,
    },
  ];

  return labels;
};

export const getUserSocials = (selectedUser: any) => {
  const labels = [
    {
      label: "Twitter",
      value: selectedUser?.socials?.twitter,
    },
    {
      label: "Facebook",
      value: selectedUser?.socials?.facebook,
    },
    {
      label: "Instagram",
      value: selectedUser?.socials?.instagram,
    },
  ];

  return labels;
};

export const getUserGuarantor = (selectedUser: any) => {
  const labels = [
    {
      label: "Full Name",
      value: `${selectedUser?.guarantor?.firstName} ${selectedUser?.guarantor?.lastName}`,
    },
    {
      label: "Phone Number",
      value: selectedUser?.guarantor?.phoneNumber,
    },
    {
      label: "Email Address",
      value: selectedUser?.guarantor?.email,
    },
    {
      label: "Address",
      value: selectedUser?.guarantor?.address,
    },
    {
      label: "Relationship",
      value: selectedUser?.guarantor?.relationship,
    },
  ];

  return labels;
};
