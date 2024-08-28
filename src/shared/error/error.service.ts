import {
	Injectable,
	BadRequestException,
	UnauthorizedException,
	ForbiddenException,
	NotFoundException,
	MethodNotAllowedException,
	NotAcceptableException,
	RequestTimeoutException,
	ConflictException,
	GoneException,
	PayloadTooLargeException,
	UnsupportedMediaTypeException,
	InternalServerErrorException,
	NotImplementedException,
	BadGatewayException,
	ServiceUnavailableException,
	GatewayTimeoutException,
	HttpException,
  } from '@nestjs/common';
  
  @Injectable()
  export class ErrorService {
	handleBadRequestError(message: string): BadRequestException {
	  return new BadRequestException(message);
	}
  
	handleUnauthorizedError(message: string): UnauthorizedException {
	  return new UnauthorizedException(message);
	}
  
	handleForbiddenError(message: string): ForbiddenException {
	  return new ForbiddenException(message);
	}
  
	handleNotFoundError(message: string): NotFoundException {
	  return new NotFoundException(message);
	}
  
	handleMethodNotAllowedError(message: string): MethodNotAllowedException {
	  return new MethodNotAllowedException(message);
	}
  
	handleNotAcceptableError(message: string): NotAcceptableException {
	  return new NotAcceptableException(message);
	}
  
	handleRequestTimeoutError(message: string): RequestTimeoutException {
	  return new RequestTimeoutException(message);
	}
  
	handleConflictError(message: string): ConflictException {
	  return new ConflictException(message);
	}
  
	handleGoneError(message: string): GoneException {
	  return new GoneException(message);
	}
  
	handlePayloadTooLargeError(message: string): PayloadTooLargeException {
	  return new PayloadTooLargeException(message);
	}
  
	handleUnsupportedMediaTypeError(message: string): UnsupportedMediaTypeException {
	  return new UnsupportedMediaTypeException(message);
	}
  
	handleServerError(message: string): InternalServerErrorException {
	  return new InternalServerErrorException(message);
	}
  
	handleNotImplementedError(message: string): NotImplementedException {
	  return new NotImplementedException(message);
	}
  
	handleBadGatewayError(message: string): BadGatewayException {
	  return new BadGatewayException(message);
	}
  
	handleServiceUnavailableError(message: string): ServiceUnavailableException {
	  return new ServiceUnavailableException(message);
	}
  
	handleGatewayTimeoutError(message: string): GatewayTimeoutException {
	  return new GatewayTimeoutException(message);
	}
  
	handleHttpError(status: number, message: string): HttpException {
	  return new HttpException(message, status);
	}
  }
  