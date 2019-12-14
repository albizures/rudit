import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выздоравливать: PerfectVerb = {
  name: Word('выздоравливать', 6),
  singular1stPerson: Word('выздоравливаю', 6),
  singular2ndPerson: Word('выздоравливаешь', 6),
  singular3rdPerson: Word('выздоравливает', 6),
  plural1stPerson: Word('выздоравливаем', 6),
  plural2ndPerson: Word('выздоравливаете', 6),
  plural3rdPerson: Word('выздоравливают', 6),
  masculinePast: Word('выздоравливал', 6),
  femininePast: Word('выздоравливала', 6),
  neuterPast: Word('выздоравливало', 6),
  pluralPast: Word('выздоравливали', 6),
  imperativeInformal: Word('выздоравливай', 6),
  imperativeFormal: Word('выздоравливайте', 6),
  imperfect: [],
};

perfectVerbs.set(выздоравливать.name.text, выздоравливать);

export { выздоравливать };