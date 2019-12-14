import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const усовещивать: PerfectVerb = {
  name: Word('усовещивать', 2),
  singular1stPerson: Word('усовещиваю', 2),
  singular2ndPerson: Word('усовещиваешь', 2),
  singular3rdPerson: Word('усовещивает', 2),
  plural1stPerson: Word('усовещиваем', 2),
  plural2ndPerson: Word('усовещиваете', 2),
  plural3rdPerson: Word('усовещивают', 2),
  masculinePast: Word('усовещивал', 2),
  femininePast: Word('усовещивала', 2),
  neuterPast: Word('усовещивало', 2),
  pluralPast: Word('усовещивали', 2),
  imperativeInformal: Word('усовещивай', 2),
  imperativeFormal: Word('усовещивайте', 2),
  imperfect: [],
};

perfectVerbs.set(усовещивать.name.text, усовещивать);

export { усовещивать };