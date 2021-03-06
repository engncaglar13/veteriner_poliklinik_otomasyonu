using AutoMapper;
using murphy.vpo.API.DTOs;
using murphy.vpo.Entity.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace murphy.vpo.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles() { 
        CreateMap<User, UserDto>().ReverseMap();
        CreateMap<Role, RoleDto>().ReverseMap();
        CreateMap<User, UserRegisterDto>().ReverseMap();
        CreateMap<User, UserLoginDto>().ReverseMap();
        CreateMap<User, UserTokenDto>().ReverseMap();
        CreateMap<UserRole, UserRoleDto>().ReverseMap();
        CreateMap<Pet, PetDto>().ReverseMap();
        CreateMap<Appointment, AppointmentDto>().ReverseMap();
        CreateMap<Customer, CustomerDto>().ReverseMap();
        CreateMap<Product, ProductDto>().ReverseMap();
        CreateMap<Supplier, SupplierDto>().ReverseMap();
        CreateMap<ProductCategory, ProductCategoryDto>().ReverseMap();
        CreateMap<CurrencyUnit, CurrencyUnitDto>().ReverseMap();
        CreateMap<Payment, PaymentDto>().ReverseMap();
        CreateMap<MeasurementUnit, MeasurementUnitDto>().ReverseMap();
        CreateMap<Payment, ParameterDto>().ReverseMap();
        CreateMap<ClinicalInformation, ClinicalInformationDto>().ReverseMap();
        CreateMap<TaxRate, TaxRateDto>().ReverseMap();
        CreateMap<Invoice, InvoiceDto>().ReverseMap();
        CreateMap<Putative, PutativeDto>().ReverseMap();
        CreateMap<Report, ReportDto>().ReverseMap();
        }
    }
}
