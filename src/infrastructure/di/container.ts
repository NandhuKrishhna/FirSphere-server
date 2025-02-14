import "reflect-metadata";
import { Container } from "typedi";

import { IUserRepositoryToken } from "../../application/repositories/IUserRepository";
import { UserRepository } from "../repositories/UserRepository";
import { IVerficaitonCodeRepositoryToken } from "../../application/repositories/IVerificaitonCodeRepository";
import { VerificationCodeRepository } from "../repositories/VerficationCodeRepository";
import { ISessionRepositoryToken } from "../../application/repositories/ISessionRepository";
import { SessionRepository } from "../repositories/SessionRepository";
import { IOtpReposirtoryCodeToken } from "../../application/repositories/IOtpReposirtory";
import { OtpRepository } from "../repositories/OtpRepository";
import { IDoctorRepositoryToken } from "../../application/repositories/IDoctorReposirtory";
import { DoctorRepository } from "../repositories/DoctorRepository";
import { IAdminRepositoryToken } from "../../application/repositories/IAdminRepository";
import { AdminRepository } from "../repositories/AdminRepository";
import { INotificationRepositoryToken } from "../../application/repositories/INotificationRepository";
import { NotificationRepository } from "../repositories/NotifcationRepository";
import { ISlotRepositoryToken } from "../../application/repositories/ISlotRepository";
import { SlotRepository } from "../repositories/SlotRepository";
import { IAppointmentRepositoryToken } from "../../application/repositories/IAppointmentRepository";
import { AppointmentRepository } from "../repositories/AppointmentRepository";
import { IWalletRepositoryToken } from "../../application/repositories/IWalletRepository";
import { WalletRepository } from "../repositories/WalletRepository";

Container.set(IUserRepositoryToken, new UserRepository());
Container.set(IVerficaitonCodeRepositoryToken, new VerificationCodeRepository());
Container.set(ISessionRepositoryToken, new SessionRepository());
Container.set(IOtpReposirtoryCodeToken, new OtpRepository());
Container.set(IDoctorRepositoryToken , new DoctorRepository());
Container.set(IAdminRepositoryToken , new AdminRepository());
Container.set(INotificationRepositoryToken , new NotificationRepository());
Container.set(ISlotRepositoryToken , new SlotRepository());
Container.set(IAppointmentRepositoryToken , new AppointmentRepository());
Container.set(IWalletRepositoryToken, new WalletRepository())
