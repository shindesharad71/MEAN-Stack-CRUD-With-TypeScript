import { formatDate } from '@angular/common';
import {
	Component,
	ViewEncapsulation,
	ElementRef,
	Input,
	OnInit,
	OnDestroy,
	Output,
	EventEmitter,
} from '@angular/core';
import {
	FormGroup,
	FormControl,
	Validators,
	FormBuilder,
} from '@angular/forms';
import { ModalService } from './modal.service';

@Component({
	selector: 'app-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class ModalComponent implements OnInit, OnDestroy {
	@Input() id: string;
	@Output() afterFormSubmit = new EventEmitter<any>();

	@Input() public set city(city: any) {
		if (city?.id) {
			this.editFormValues = city;
			if (this.editFormValues.id) {
				this.modalTitle = 'Edit Record';
			}
			this.updateFormValues();
		}
	}

	cityForm: FormGroup;
	private element: any;
	modalTitle = 'Create Record';
	editFormValues: any;

	constructor(
		private modalService: ModalService,
		private el: ElementRef,
		private formBuilder: FormBuilder
	) {
		this.element = el.nativeElement;
	}

	ngOnInit(): void {
		if (!this.id) {
			console.error('modal must have an id');
			return;
		}

		document.body.appendChild(this.element);

		this.element.addEventListener('click', (el) => {
			if (el.target.className === 'app-modal') {
				this.close();
			}
		});
		this.modalService.add(this);
		this.initForm();
	}

	open(): void {
		this.element.style.display = 'block';
		document.body.classList.add('app-modal-open');
	}

	close(): void {
		this.element.style.display = 'none';
		document.body.classList.remove('app-modal-open');
	}

	initForm(): void {
		this.cityForm = this.formBuilder.group({
			id: new FormControl(this.editFormValues?.id || null),
			city: new FormControl(
				this.editFormValues?.city || null,
				Validators.required
			),
			start_date: new FormControl(
				this.editFormValues?.start_date || null,
				Validators.required
			),
			end_date: new FormControl(
				this.editFormValues?.end_date || null,
				Validators.required
			),
			price: new FormControl(
				this.editFormValues?.price || null,
				Validators.required
			),
			status: new FormControl(
				this.editFormValues?.status || null,
				Validators.required
			),
			color: new FormControl(
				this.editFormValues?.color || null,
				Validators.required
			),
		});
	}

	updateFormValues(): void {
		if (this.editFormValues?.id) {
			this.cityForm.patchValue({
				...this.editFormValues,
				start_date: formatDate(
					this.editFormValues.start_date,
					'yyyy-MM-dd',
					'en'
				),
				end_date: formatDate(
					this.editFormValues.start_date,
					'yyyy-MM-dd',
					'en'
				),
			});
		}
	}

	onSubmit(): void {
		const actionType = this.editFormValues?.id ? 'UPDATE' : 'CREATE';
		this.afterFormSubmit.emit({ actionType, form: this.cityForm.value });
		this.cityForm.reset();
		this.close();
	}

	ngOnDestroy(): void {
		this.cityForm.reset();
		this.modalService.remove(this.id);
		this.element.remove();
	}
}
