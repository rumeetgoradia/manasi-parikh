import {
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Grid,
	GridItem,
	Input,
	Textarea,
	useToast,
	UseToastOptions,
} from "@chakra-ui/react"
import { PageLayout } from "@components/PageLayout"
import type { NextPage } from "next"
import { useForm } from "react-hook-form"
import redaxios, { Response } from "redaxios"

type ContactData = {
	name: string
	email: string
	subject: string
	message: string
}

export const EMAIL_REGEX =
	/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

const ContactPage: NextPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting, isValidating },
		reset,
	} = useForm<ContactData>()

	const toast = useToast()
	const toastOptions: UseToastOptions = {
		duration: 5000,
		isClosable: true,
		position: "top-right",
	}

	const onSubmit = (values: ContactData) => {
		// console.log(values)
		redaxios.post("/api/contact", values).then((res: Response<any>) => {
			if (res.status === 200) {
				toast({
					title: "Message sent successfully " + String.fromCodePoint(0x1f601),
					description: "Thanks for your message! I'll get back to you shortly.",
					status: "success",
					onCloseComplete: reset,
					...toastOptions,
				})
			} else {
				toast({
					title: "Something went wrong " + String.fromCodePoint(0x1f615),
					description:
						"There was an issue processing your message. Please try again later!",
					status: "error",
					...toastOptions,
				})
			}
		})
	}

	return (
		<PageLayout
			seoTitle="Contact"
			pageTitle="Looking forward to hearing from you"
		>
			<Grid
				as="form"
				noValidate
				onSubmit={handleSubmit(onSubmit)}
				gap={6}
				templateColumns="repeat(2, 1fr)"
			>
				<Input type="hidden" name="url" />
				<GridItem colSpan={{ base: 2, sm: 1 }}>
					<FormControl id="name" isRequired isInvalid={!!errors.name}>
						<FormLabel>Name</FormLabel>
						<Input
							type="text"
							variant="outline"
							{...register("name", {
								required: "Please enter your name.",
							})}
						/>
						<FormErrorMessage>{errors.name?.message}</FormErrorMessage>
					</FormControl>
				</GridItem>
				<GridItem colSpan={{ base: 2, sm: 1 }}>
					<FormControl id="email" isRequired isInvalid={!!errors.email}>
						<FormLabel>Email</FormLabel>
						<Input
							type="email"
							variant="outline"
							{...register("email", {
								required: "Please enter your email.",
								pattern: {
									value: EMAIL_REGEX,
									message: "Please enter a valid email address.",
								},
							})}
						/>
						<FormErrorMessage>{errors.email?.message}</FormErrorMessage>
					</FormControl>
				</GridItem>
				<GridItem colSpan={2}>
					<FormControl id="subject" isRequired isInvalid={!!errors.subject}>
						<FormLabel>Subject</FormLabel>
						<Input
							type="text"
							variant="outline"
							{...register("subject", {
								required: "Please enter the subject of your message.",
							})}
						/>
						<FormErrorMessage>{errors.subject?.message}</FormErrorMessage>
					</FormControl>
				</GridItem>
				<GridItem colSpan={2}>
					<FormControl id="message" isRequired isInvalid={!!errors.message}>
						<FormLabel>Message</FormLabel>
						<Textarea
							type="subject"
							variant="outline"
							rows={10}
							{...register("message", {
								required: "Please enter your message.",
							})}
						/>
						<FormErrorMessage>{errors.message?.message}</FormErrorMessage>
					</FormControl>
				</GridItem>
				<GridItem colSpan={2}>
					<Button
						type="submit"
						variant="filled"
						w="full"
						disabled={isSubmitting || isValidating}
						isLoading={isSubmitting || isValidating}
						loadingText="Sending..."
					>
						Send Message
					</Button>
				</GridItem>
			</Grid>
		</PageLayout>
	)
}

export default ContactPage
