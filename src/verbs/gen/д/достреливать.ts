import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const достреливать: PerfectVerb = {
  name: Word('достреливать', 5),
  singular1stPerson: Word('достреливаю', 5),
  singular2ndPerson: Word('достреливаешь', 5),
  singular3rdPerson: Word('достреливает', 5),
  plural1stPerson: Word('достреливаем', 5),
  plural2ndPerson: Word('достреливаете', 5),
  plural3rdPerson: Word('достреливают', 5),
  masculinePast: Word('достреливал', 5),
  femininePast: Word('достреливала', 5),
  neuterPast: Word('достреливало', 5),
  pluralPast: Word('достреливали', 5),
  imperativeInformal: Word('достреливай', 5),
  imperativeFormal: Word('достреливайте', 5),
  imperfect: [],
};

perfectVerbs.set(достреливать.name.text, достреливать);

export { достреливать };