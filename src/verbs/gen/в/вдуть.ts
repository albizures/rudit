import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вдуть: PerfectVerb = {
  name: Word('вдуть', 2),
  singular1stPerson: Word('вдую', 2),
  singular2ndPerson: Word('вдуешь', 2),
  singular3rdPerson: Word('вдует', 2),
  plural1stPerson: Word('вдуем', 2),
  plural2ndPerson: Word('вдуете', 2),
  plural3rdPerson: Word('вдуют', 2),
  masculinePast: Word('вдул', 2),
  femininePast: Word('вдула', 2),
  neuterPast: Word('вдуло', 2),
  pluralPast: Word('вдули', 2),
  imperativeInformal: Word('вдуй', 2),
  imperativeFormal: Word('вдуйте', 2),
  imperfect: [],
};

perfectVerbs.set(вдуть.name.text, вдуть);

export { вдуть };