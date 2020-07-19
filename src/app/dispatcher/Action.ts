export class Action{
	actionType: string;
	payload: any;

	constructor(_actionType:string, _payload:any){
	  this.actionType = _actionType;
	  this.payload = _payload;
	};
};