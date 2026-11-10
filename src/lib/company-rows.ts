import { company } from '../config/company';

// Company facts as label/value rows; empty values (not issued yet) are dropped.
export const companyRows = () =>
  [
    ['상호', `${company.nameKo} (${company.nameEn})`],
    ['법인명', company.legalName],
    ['대표', company.ceo],
    ['사업자등록번호', company.bizNumber],
    ['전기공사업 등록번호', company.licenseNumber],
    ['주소', company.address],
    ['전화', company.phone],
    ['이메일', company.email],
    ['상담 시간', company.hours],
  ].filter(([, v]) => v) as [string, string][];
