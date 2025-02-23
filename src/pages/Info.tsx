
import Layout from "../components/Layout";

const Info = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-6">
          <p className="italic text-gray-600">
            a Bulgarian painter living in Phoenix, Arizona
          </p>
          
          <div className="space-y-4">
            <p className="italic">
              "There is something distinct and individual about your work," cubist legend Luigi Montanarini said to Kras, a seventeen-year-old Bulgarian art student, while sipping espresso in Rome. "I myself get a creative impulse when I look at your work."
            </p>
            
            <p>
              Kras left communist Bulgaria to study art in Italy in 1965 under the famous cubist Luigi Montanarini. Upon graduating he made the decision to emigrate to the United States in pursuit of freedom, both artistic and personal. He has lived in many places including Chicago, Miami, Phoenix, Philadelphia and even returned to his motherland Bulgaria after the fall of communism in the late 1980s. Kras has always been awestruck by the the otherworldly surreal landscape of Arizona and is currently residing and painting in Phoenix. When asked to describe his paintings, he quietly says, "All my works have movement and sensitivity, but let others describe them".
            </p>
            
            <p>
              For more info, contact us <a href="#" className="underline hover:text-gray-600 transition-colors">here</a>
            </p>
          </div>
        </div>
        
        <div>
          <img
            src="/lovable-uploads/a00fc0fe-587c-42f8-b910-dc8ad97bf1cd.png"
            alt="Kras Gorin portrait"
            className="w-full rounded-lg shadow-lg"
          />
          <p className="text-center mt-4">born in Bulgaria - March 23, 1948</p>
        </div>
      </div>
    </Layout>
  );
};

export default Info;
