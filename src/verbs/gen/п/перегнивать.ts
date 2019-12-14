import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перегнивать: PerfectVerb = {
  name: Word('перегнивать', 8),
  singular1stPerson: Word('перегниваю', 8),
  singular2ndPerson: Word('перегниваешь', 8),
  singular3rdPerson: Word('перегнивает', 8),
  plural1stPerson: Word('перегниваем', 8),
  plural2ndPerson: Word('перегниваете', 8),
  plural3rdPerson: Word('перегнивают', 8),
  masculinePast: Word('перегнивал', 8),
  femininePast: Word('перегнивала', 8),
  neuterPast: Word('перегнивало', 8),
  pluralPast: Word('перегнивали', 8),
  imperativeInformal: Word('перегнивай', 8),
  imperativeFormal: Word('перегнивайте', 8),
  imperfect: [],
};

perfectVerbs.set(перегнивать.name.text, перегнивать);

export { перегнивать };