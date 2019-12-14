import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проваливать: PerfectVerb = {
  name: Word('проваливать', 4),
  singular1stPerson: Word('проваливаю', 4),
  singular2ndPerson: Word('проваливаешь', 4),
  singular3rdPerson: Word('проваливает', 4),
  plural1stPerson: Word('проваливаем', 4),
  plural2ndPerson: Word('проваливаете', 4),
  plural3rdPerson: Word('проваливают', 4),
  masculinePast: Word('проваливал', 4),
  femininePast: Word('проваливала', 4),
  neuterPast: Word('проваливало', 4),
  pluralPast: Word('проваливали', 4),
  imperativeInformal: Word('проваливай', 4),
  imperativeFormal: Word('проваливайте', 4),
  imperfect: [],
};

perfectVerbs.set(проваливать.name.text, проваливать);

export { проваливать };