import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доканчивать: PerfectVerb = {
  name: Word('доканчивать', 3),
  singular1stPerson: Word('доканчиваю', 3),
  singular2ndPerson: Word('доканчиваешь', 3),
  singular3rdPerson: Word('доканчивает', 3),
  plural1stPerson: Word('доканчиваем', 3),
  plural2ndPerson: Word('доканчиваете', 3),
  plural3rdPerson: Word('доканчивают', 3),
  masculinePast: Word('доканчивал', 3),
  femininePast: Word('доканчивала', 3),
  neuterPast: Word('доканчивало', 3),
  pluralPast: Word('доканчивали', 3),
  imperativeInformal: Word('доканчивай', 3),
  imperativeFormal: Word('доканчивайте', 3),
  imperfect: [],
};

perfectVerbs.set(доканчивать.name.text, доканчивать);

export { доканчивать };