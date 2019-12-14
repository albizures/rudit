import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зачищать: PerfectVerb = {
  name: Word('зачищать', 5),
  singular1stPerson: Word('зачищаю', 5),
  singular2ndPerson: Word('зачищаешь', 5),
  singular3rdPerson: Word('зачищает', 5),
  plural1stPerson: Word('зачищаем', 5),
  plural2ndPerson: Word('зачищаете', 5),
  plural3rdPerson: Word('зачищают', 5),
  masculinePast: Word('зачищал', 5),
  femininePast: Word('зачищала', 5),
  neuterPast: Word('зачищало', 5),
  pluralPast: Word('зачищали', 5),
  imperativeInformal: Word('зачищай', 5),
  imperativeFormal: Word('зачищайте', 5),
  imperfect: [],
};

perfectVerbs.set(зачищать.name.text, зачищать);

export { зачищать };