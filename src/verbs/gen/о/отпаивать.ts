import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отпаивать: PerfectVerb = {
  name: Word('отпаивать', 3),
  singular1stPerson: Word('отпаиваю', 3),
  singular2ndPerson: Word('отпаиваешь', 3),
  singular3rdPerson: Word('отпаивает', 3),
  plural1stPerson: Word('отпаиваем', 3),
  plural2ndPerson: Word('отпаиваете', 3),
  plural3rdPerson: Word('отпаивают', 3),
  masculinePast: Word('отпаивал', 3),
  femininePast: Word('отпаивала', 3),
  neuterPast: Word('отпаивало', 3),
  pluralPast: Word('отпаивали', 3),
  imperativeInformal: Word('отпаивай', 3),
  imperativeFormal: Word('отпаивайте', 3),
  imperfect: [],
};

perfectVerbs.set(отпаивать.name.text, отпаивать);

export { отпаивать };