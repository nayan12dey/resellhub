
import SignupForm from "@/components/auth/SignupForm";
import Container from "@/components/shared/Container";

export default function SignupPage() {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center py-16">
            <Container>
                <SignupForm />
            </Container>
        </div>
    );
}