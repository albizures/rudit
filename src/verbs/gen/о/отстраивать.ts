import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отстраивать: PerfectVerb = {
  name: Word('отстраивать', 5),
  singular1stPerson: Word('отстраиваю', 5),
  singular2ndPerson: Word('отстраиваешь', 5),
  singular3rdPerson: Word('отстраивает', 5),
  plural1stPerson: Word('отстраиваем', 5),
  plural2ndPerson: Word('отстраиваете', 5),
  plural3rdPerson: Word('отстраивают', 5),
  masculinePast: Word('отстраивал', 5),
  femininePast: Word('отстраивала', 5),
  neuterPast: Word('отстраивало', 5),
  pluralPast: Word('отстраивали', 5),
  imperativeInformal: Word('отстраивай', 5),
  imperativeFormal: Word('отстраивайте', 5),
  imperfect: [],
};

perfectVerbs.set(отстраивать.name.text, отстраивать);

export { отстраивать };