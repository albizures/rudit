import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зажиливать: PerfectVerb = {
  name: Word('зажиливать', 3),
  singular1stPerson: Word('зажиливаю', 3),
  singular2ndPerson: Word('зажиливаешь', 3),
  singular3rdPerson: Word('зажиливает', 3),
  plural1stPerson: Word('зажиливаем', 3),
  plural2ndPerson: Word('зажиливаете', 3),
  plural3rdPerson: Word('зажиливают', 3),
  masculinePast: Word('зажиливал', 3),
  femininePast: Word('зажиливала', 3),
  neuterPast: Word('зажиливало', 3),
  pluralPast: Word('зажиливали', 3),
  imperativeInformal: Word('зажиливай', 3),
  imperativeFormal: Word('зажиливайте', 3),
  imperfect: [],
};

perfectVerbs.set(зажиливать.name.text, зажиливать);

export { зажиливать };