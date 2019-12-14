import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взвивать: PerfectVerb = {
  name: Word('взвивать', 5),
  singular1stPerson: Word('взвиваю', 5),
  singular2ndPerson: Word('взвиваешь', 5),
  singular3rdPerson: Word('взвивает', 5),
  plural1stPerson: Word('взвиваем', 5),
  plural2ndPerson: Word('взвиваете', 5),
  plural3rdPerson: Word('взвивают', 5),
  masculinePast: Word('взвивал', 5),
  femininePast: Word('взвивала', 5),
  neuterPast: Word('взвивало', 5),
  pluralPast: Word('взвивали', 5),
  imperativeInformal: Word('взвивай', 5),
  imperativeFormal: Word('взвивайте', 5),
  imperfect: [],
};

perfectVerbs.set(взвивать.name.text, взвивать);

export { взвивать };