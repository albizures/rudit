import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надстраивать: PerfectVerb = {
  name: Word('надстраивать', 6),
  singular1stPerson: Word('надстраиваю', 6),
  singular2ndPerson: Word('надстраиваешь', 6),
  singular3rdPerson: Word('надстраивает', 6),
  plural1stPerson: Word('надстраиваем', 6),
  plural2ndPerson: Word('надстраиваете', 6),
  plural3rdPerson: Word('надстраивают', 6),
  masculinePast: Word('надстраивал', 6),
  femininePast: Word('надстраивала', 6),
  neuterPast: Word('надстраивало', 6),
  pluralPast: Word('надстраивали', 6),
  imperativeInformal: Word('надстраивай', 6),
  imperativeFormal: Word('надстраивайте', 6),
  imperfect: [],
};

perfectVerbs.set(надстраивать.name.text, надстраивать);

export { надстраивать };