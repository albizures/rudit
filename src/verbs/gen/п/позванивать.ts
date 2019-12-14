import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const позванивать: PerfectVerb = {
  name: Word('позванивать', 4),
  singular1stPerson: Word('позваниваю', 4),
  singular2ndPerson: Word('позваниваешь', 4),
  singular3rdPerson: Word('позванивает', 4),
  plural1stPerson: Word('позваниваем', 4),
  plural2ndPerson: Word('позваниваете', 4),
  plural3rdPerson: Word('позванивают', 4),
  masculinePast: Word('позванивал', 4),
  femininePast: Word('позванивала', 4),
  neuterPast: Word('позванивало', 4),
  pluralPast: Word('позванивали', 4),
  imperativeInformal: Word('позванивай', 4),
  imperativeFormal: Word('позванивайте', 4),
  imperfect: [],
};

perfectVerbs.set(позванивать.name.text, позванивать);

export { позванивать };