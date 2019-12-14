import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сгнивать: PerfectVerb = {
  name: Word('сгнивать', 5),
  singular1stPerson: Word('сгниваю', 5),
  singular2ndPerson: Word('сгниваешь', 5),
  singular3rdPerson: Word('сгнивает', 5),
  plural1stPerson: Word('сгниваем', 5),
  plural2ndPerson: Word('сгниваете', 5),
  plural3rdPerson: Word('сгнивают', 5),
  masculinePast: Word('сгнивал', 5),
  femininePast: Word('сгнивала', 5),
  neuterPast: Word('сгнивало', 5),
  pluralPast: Word('сгнивали', 5),
  imperativeInformal: Word('сгнивай', 5),
  imperativeFormal: Word('сгнивайте', 5),
  imperfect: [],
};

perfectVerbs.set(сгнивать.name.text, сгнивать);

export { сгнивать };