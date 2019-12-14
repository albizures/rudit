import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рассеивать: PerfectVerb = {
  name: Word('рассеивать', 4),
  singular1stPerson: Word('рассеиваю', 4),
  singular2ndPerson: Word('рассеиваешь', 4),
  singular3rdPerson: Word('рассеивает', 4),
  plural1stPerson: Word('рассеиваем', 4),
  plural2ndPerson: Word('рассеиваете', 4),
  plural3rdPerson: Word('рассеивают', 4),
  masculinePast: Word('рассеивал', 4),
  femininePast: Word('рассеивала', 4),
  neuterPast: Word('рассеивало', 4),
  pluralPast: Word('рассеивали', 4),
  imperativeInformal: Word('рассеивай', 4),
  imperativeFormal: Word('рассеивайте', 4),
  imperfect: [],
};

perfectVerbs.set(рассеивать.name.text, рассеивать);

export { рассеивать };