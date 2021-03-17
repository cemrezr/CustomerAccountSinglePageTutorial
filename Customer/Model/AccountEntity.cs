using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Customer.Model
{
    public class AccountEntity
    {
        public int AccountId { get; set; }
        public int BranchCode { get; set; }
        public int AccountNumber { get; set; }
        public DateTime OpeningDate { get; set; }
        public string IBAN { get; set; }
    }
}
