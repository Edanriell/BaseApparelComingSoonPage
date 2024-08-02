import { FC } from "react";

import { MainLayout } from "@widgets/layouts/main";

export const HomePage: FC = () => {
	return (
		<MainLayout>
			<section className="desktop:grid desktop:grid-cols-customTwoCols desktop:grid-rows-1 desktop:pl-[16.5rem] relative">
				<picture className="desktop:mt-[-16.299rem] desktop:col-start-2 desktop:col-end-3 desktop:row-start-1 desktop:row-end-2">
					<source
						type="image/webp"
						media="(min-width: 1440px)"
						srcSet="/images/raster/woman-image-desktop@1x.webp 1x, /images/raster/woman-image-desktop@2x.webp 2x"
					/>
					<source
						type="image/webp"
						media="(min-width: 375px)"
						srcSet="/images/raster/woman-image-mobile@1x.webp 1x, /images/raster/woman-image-mobile@2x.webp 2x"
					/>
					<source
						type="image/jpg"
						media="(min-width: 1440px)"
						srcSet="/images/raster/woman-image-desktop@1x.jpg 1x, /images/raster/woman-image-desktop@2x.jpg 2x"
					/>
					<source
						type="image/jpg"
						media="(min-width: 375px)"
						srcSet="/images/raster/woman-image-mobile@1x.jpg 1x, /images/raster/woman-image-mobile@2x.jpg 2x"
					/>
					<img
						className="w-full h-[25rem] object-cover desktop:max-w-[42.36vw] desktop:h-[100vh]"
						src="/images/raster/woman-image-desktop@1x.jpg"
						srcSet="/images/raster/woman-image-desktop@2x.jpg"
						alt="Woman"
					/>
				</picture>
				<div className="mt-[6.4rem] mb-[9.2rem] px-[3.2rem] desktop:mt-[7.1rem] desktop:mb-[unset] desktop:px-[unset] relative desktop:col-start-1 desktop:col-end-2 desktop:row-start-1 desktop:row-end-2 desktop:pr-[22rem]">
					<h1 className="font-josefinSans font-light text-[4rem] leading-[105%] tracking-[0.27em] text-center text-oriental-pink-400 uppercase mb-[1.6rem] desktop:mb-[1.8rem] desktop:text-[6.4rem] desktop:leading-[100%] desktop:text-left">
						We&apos;re{" "}
						<strong className="font-josefinSans font-semibold text-[4rem] leading-[105%] tracking-[0.27em] text-center text-masala-900 uppercase desktop:text-[6.4rem] desktop:leading-[111%] desktop:text-left">
							coming soon
						</strong>
					</h1>
					<p className="font-josefinSans font-normal text-[1.4rem] leading-[157%] text-center text-oriental-pink-400 mb-[3.2rem] desktop:text-[1.6rem] desktop:leading-[175%] desktop:text-left desktop:mb-[4rem] desktop:max-w-[45rem] desktopXl:max-w-[70rem]">
						Hello fellow shoppers! We&apos;re currently building our new fashion store. Add your
						email below to stay up-to-date with announcements and our launch deals.
					</p>
					<form className="relative" method="POST">
						<div className="relative desktop:max-w-[45.5rem]">
							<label className="sr-only" htmlFor="customer-email">
								Customer email address
							</label>
							<input
								className="w-full max-h-[4.8rem] font-josefinSans font-normal text-[1.4rem] leading-[200%] text-masala-900 placeholder:text-oriental-pink-400-05 pt-[1.1rem] pb-[0.9rem] pl-[2.4rem] pr-[6.4rem] bg-transparent rounded-[2.8rem] border border-solid border-oriental-pink-400 desktop:max-h-[5.6rem] desktop:pl-[3.2rem] desktop:pt-[1.5rem] desktop:pb-[1.3rem] desktop:pr-[13.2rem] desktop:text-[1.6rem] desktop:leading-[175%]"
								id="customer-email"
								name="customer-email"
								type="email"
								placeholder="Email Address"
							/>
							<button
								className="px-[2.8rem] py-[1.6rem] max-h-[4.8rem] rounded-[2.8rem] shadow-buttonShadow bg-buttonGradient absolute top-0 right-0 desktop:max-h-[5.6rem] desktop:pl-[4.6rem] desktop:pr-[4.516rem] desktop:pt-[1.9rem] desktop:pb-[1.933rem]"
								type="submit"
							>
								<img
									className="w-[0.884rem] h-[1.767rem]"
									src="/images/vector/icons/arrow-right.svg"
									alt=""
								/>
								<span className="sr-only">Send data</span>
							</button>
						</div>
					</form>
					<svg
						className="hidden absolute bottom-0 right-0 -z-10 desktop:block"
						width="417"
						height="423"
						viewBox="0 0 417 423"
						preserveAspectRatio="none"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M0 423C0 423 38.5437 276.279 188.112 238.076C337.681 199.874 417 0 417 0V423H0Z"
							fill="url(#paint0_linear_0_163)"
						/>
						<defs>
							<linearGradient
								id="paint0_linear_0_163"
								x1="198.689"
								y1="-174.704"
								x2="-172.291"
								y2="239.832"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopColor="#FFF1F1" />
								<stop offset="1" stopColor="white" />
							</linearGradient>
						</defs>
					</svg>
				</div>
			</section>
		</MainLayout>
	);
};
