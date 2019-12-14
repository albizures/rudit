import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const променивать: PerfectVerb = {
  name: Word('променивать', 4),
  singular1stPerson: Word('промениваю', 4),
  singular2ndPerson: Word('промениваешь', 4),
  singular3rdPerson: Word('променивает', 4),
  plural1stPerson: Word('промениваем', 4),
  plural2ndPerson: Word('промениваете', 4),
  plural3rdPerson: Word('променивают', 4),
  masculinePast: Word('променивал', 4),
  femininePast: Word('променивала', 4),
  neuterPast: Word('променивало', 4),
  pluralPast: Word('променивали', 4),
  imperativeInformal: Word('променивай', 4),
  imperativeFormal: Word('променивайте', 4),
  imperfect: [],
};

perfectVerbs.set(променивать.name.text, променивать);

export { променивать };