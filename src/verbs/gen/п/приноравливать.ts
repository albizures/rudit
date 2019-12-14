import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приноравливать: PerfectVerb = {
  name: Word('приноравливать', 6),
  singular1stPerson: Word('приноравливаю', 6),
  singular2ndPerson: Word('приноравливаешь', 6),
  singular3rdPerson: Word('приноравливает', 6),
  plural1stPerson: Word('приноравливаем', 6),
  plural2ndPerson: Word('приноравливаете', 6),
  plural3rdPerson: Word('приноравливают', 6),
  masculinePast: Word('приноравливал', 6),
  femininePast: Word('приноравливала', 6),
  neuterPast: Word('приноравливало', 6),
  pluralPast: Word('приноравливали', 6),
  imperativeInformal: Word('приноравливай', 6),
  imperativeFormal: Word('приноравливайте', 6),
  imperfect: [],
};

perfectVerbs.set(приноравливать.name.text, приноравливать);

export { приноравливать };