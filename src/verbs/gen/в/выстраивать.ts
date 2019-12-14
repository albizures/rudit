import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выстраивать: PerfectVerb = {
  name: Word('выстраивать', 5),
  singular1stPerson: Word('выстраиваю', 5),
  singular2ndPerson: Word('выстраиваешь', 5),
  singular3rdPerson: Word('выстраивает', 5),
  plural1stPerson: Word('выстраиваем', 5),
  plural2ndPerson: Word('выстраиваете', 5),
  plural3rdPerson: Word('выстраивают', 5),
  masculinePast: Word('выстраивал', 5),
  femininePast: Word('выстраивала', 5),
  neuterPast: Word('выстраивало', 5),
  pluralPast: Word('выстраивали', 5),
  imperativeInformal: Word('выстраивай', 5),
  imperativeFormal: Word('выстраивайте', 5),
  imperfect: [],
};

perfectVerbs.set(выстраивать.name.text, выстраивать);

export { выстраивать };