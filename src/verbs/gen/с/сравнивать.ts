import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сравнивать: PerfectVerb = {
  name: Word('сравнивать', 2),
  singular1stPerson: Word('сравниваю', 2),
  singular2ndPerson: Word('сравниваешь', 2),
  singular3rdPerson: Word('сравнивает', 2),
  plural1stPerson: Word('сравниваем', 2),
  plural2ndPerson: Word('сравниваете', 2),
  plural3rdPerson: Word('сравнивают', 2),
  masculinePast: Word('сравнивал', 2),
  femininePast: Word('сравнивала', 2),
  neuterPast: Word('сравнивало', 2),
  pluralPast: Word('сравнивали', 2),
  imperativeInformal: Word('сравнивай', 2),
  imperativeFormal: Word('сравнивайте', 2),
  imperfect: ['сравнить'],
};

perfectVerbs.set(сравнивать.name.text, сравнивать);

export { сравнивать };