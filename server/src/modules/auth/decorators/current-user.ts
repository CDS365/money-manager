import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';

export const CurrentUser = createParamDecorator(
  (_data: never, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    const user = request.currentUser;
    if (!user) throw new UnauthorizedException('Session not found');
    return user;
  },
);
