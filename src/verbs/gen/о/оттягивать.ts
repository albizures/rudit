import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оттягивать: PerfectVerb = {
  name: Word('оттягивать', 3),
  singular1stPerson: Word('оттягиваю', 3),
  singular2ndPerson: Word('оттягиваешь', 3),
  singular3rdPerson: Word('оттягивает', 3),
  plural1stPerson: Word('оттягиваем', 3),
  plural2ndPerson: Word('оттягиваете', 3),
  plural3rdPerson: Word('оттягивают', 3),
  masculinePast: Word('оттягивал', 3),
  femininePast: Word('оттягивала', 3),
  neuterPast: Word('оттягивало', 3),
  pluralPast: Word('оттягивали', 3),
  imperativeInformal: Word('оттягивай', 3),
  imperativeFormal: Word('оттягивайте', 3),
  imperfect: ['оттянуть'],
};

perfectVerbs.set(оттягивать.name.text, оттягивать);

export { оттягивать };