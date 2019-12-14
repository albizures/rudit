import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затовариваться: PerfectVerb = {
  name: Word('затовариваться', 5),
  singular1stPerson: Word('затовариваюсь', 5),
  singular2ndPerson: Word('затовариваешься', 5),
  singular3rdPerson: Word('затоваривается', 5),
  plural1stPerson: Word('затовариваемся', 5),
  plural2ndPerson: Word('затовариваетесь', 5),
  plural3rdPerson: Word('затовариваются', 5),
  masculinePast: Word('затоваривался', 5),
  femininePast: Word('затоваривалась', 5),
  neuterPast: Word('затоваривалось', 5),
  pluralPast: Word('затоваривались', 5),
  imperativeInformal: Word('затоваривайся', 5),
  imperativeFormal: Word('затоваривайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(затовариваться.name.text, затовариваться);

export { затовариваться };