import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оббивать: PerfectVerb = {
  name: Word('оббивать', 5),
  singular1stPerson: Word('оббиваю', 5),
  singular2ndPerson: Word('оббиваешь', 5),
  singular3rdPerson: Word('оббивает', 5),
  plural1stPerson: Word('оббиваем', 5),
  plural2ndPerson: Word('оббиваете', 5),
  plural3rdPerson: Word('оббивают', 5),
  masculinePast: Word('оббивал', 5),
  femininePast: Word('оббивала', 5),
  neuterPast: Word('оббивало', 5),
  pluralPast: Word('оббивали', 5),
  imperativeInformal: Word('оббивай', 5),
  imperativeFormal: Word('оббивайте', 5),
  imperfect: [],
};

perfectVerbs.set(оббивать.name.text, оббивать);

export { оббивать };