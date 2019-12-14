import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const полоскать: PerfectVerb = {
  name: Word('полоскать', 6),
  singular1stPerson: Word('полоскаю', 6),
  singular2ndPerson: Word('полоскаешь', 6),
  singular3rdPerson: Word('полоскает', 6),
  plural1stPerson: Word('полоскаем', 6),
  plural2ndPerson: Word('полоскаете', 6),
  plural3rdPerson: Word('полоскают', 6),
  masculinePast: Word('полоскал', 6),
  femininePast: Word('полоскала', 6),
  neuterPast: Word('полоскало', 6),
  pluralPast: Word('полоскали', 6),
  imperativeInformal: Word('полоскай', 6),
  imperativeFormal: Word('полоскайте', 6),
  imperfect: ['пополоскать','прополоскать'],
};

perfectVerbs.set(полоскать.name.text, полоскать);

export { полоскать };