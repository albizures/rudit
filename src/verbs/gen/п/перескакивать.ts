import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перескакивать: PerfectVerb = {
  name: Word('перескакивать', 6),
  singular1stPerson: Word('перескакиваю', 6),
  singular2ndPerson: Word('перескакиваешь', 6),
  singular3rdPerson: Word('перескакивает', 6),
  plural1stPerson: Word('перескакиваем', 6),
  plural2ndPerson: Word('перескакиваете', 6),
  plural3rdPerson: Word('перескакивают', 6),
  masculinePast: Word('перескакивал', 6),
  femininePast: Word('перескакивала', 6),
  neuterPast: Word('перескакивало', 6),
  pluralPast: Word('перескакивали', 6),
  imperativeInformal: Word('перескакивай', 6),
  imperativeFormal: Word('перескакивайте', 6),
  imperfect: [],
};

perfectVerbs.set(перескакивать.name.text, перескакивать);

export { перескакивать };