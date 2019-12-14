import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выдуть: PerfectVerb = {
  name: Word('выдуть', 1),
  singular1stPerson: Word('выдую', 1),
  singular2ndPerson: Word('выдуешь', 1),
  singular3rdPerson: Word('выдует', 1),
  plural1stPerson: Word('выдуем', 1),
  plural2ndPerson: Word('выдуете', 1),
  plural3rdPerson: Word('выдуют', 1),
  masculinePast: Word('выдул', 1),
  femininePast: Word('выдула', 1),
  neuterPast: Word('выдуло', 1),
  pluralPast: Word('выдули', 1),
  imperativeInformal: Word('выдуй', 1),
  imperativeFormal: Word('выдуйте', 1),
  imperfect: [],
};

perfectVerbs.set(выдуть.name.text, выдуть);

export { выдуть };