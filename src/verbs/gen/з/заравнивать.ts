import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заравнивать: PerfectVerb = {
  name: Word('заравнивать', 3),
  singular1stPerson: Word('заравниваю', 3),
  singular2ndPerson: Word('заравниваешь', 3),
  singular3rdPerson: Word('заравнивает', 3),
  plural1stPerson: Word('заравниваем', 3),
  plural2ndPerson: Word('заравниваете', 3),
  plural3rdPerson: Word('заравнивают', 3),
  masculinePast: Word('заравнивал', 3),
  femininePast: Word('заравнивала', 3),
  neuterPast: Word('заравнивало', 3),
  pluralPast: Word('заравнивали', 3),
  imperativeInformal: Word('заравнивай', 3),
  imperativeFormal: Word('заравнивайте', 3),
  imperfect: [],
};

perfectVerbs.set(заравнивать.name.text, заравнивать);

export { заравнивать };