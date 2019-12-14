import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приостанавливать: PerfectVerb = {
  name: Word('приостанавливать', 8),
  singular1stPerson: Word('приостанавливаю', 8),
  singular2ndPerson: Word('приостанавливаешь', 8),
  singular3rdPerson: Word('приостанавливает', 8),
  plural1stPerson: Word('приостанавливаем', 8),
  plural2ndPerson: Word('приостанавливаете', 8),
  plural3rdPerson: Word('приостанавливают', 8),
  masculinePast: Word('приостанавливал', 8),
  femininePast: Word('приостанавливала', 8),
  neuterPast: Word('приостанавливало', 8),
  pluralPast: Word('приостанавливали', 8),
  imperativeInformal: Word('приостанавливай', 8),
  imperativeFormal: Word('приостанавливайте', 8),
  imperfect: [],
};

perfectVerbs.set(приостанавливать.name.text, приостанавливать);

export { приостанавливать };