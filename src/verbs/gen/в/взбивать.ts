import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взбивать: PerfectVerb = {
  name: Word('взбивать', 5),
  singular1stPerson: Word('взбиваю', 5),
  singular2ndPerson: Word('взбиваешь', 5),
  singular3rdPerson: Word('взбивает', 5),
  plural1stPerson: Word('взбиваем', 5),
  plural2ndPerson: Word('взбиваете', 5),
  plural3rdPerson: Word('взбивают', 5),
  masculinePast: Word('взбивал', 5),
  femininePast: Word('взбивала', 5),
  neuterPast: Word('взбивало', 5),
  pluralPast: Word('взбивали', 5),
  imperativeInformal: Word('взбивай', 5),
  imperativeFormal: Word('взбивайте', 5),
  imperfect: [],
};

perfectVerbs.set(взбивать.name.text, взбивать);

export { взбивать };