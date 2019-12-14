import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обдуть: PerfectVerb = {
  name: Word('обдуть', 3),
  singular1stPerson: Word('обдую', 3),
  singular2ndPerson: Word('обдуешь', 3),
  singular3rdPerson: Word('обдует', 3),
  plural1stPerson: Word('обдуем', 3),
  plural2ndPerson: Word('обдуете', 3),
  plural3rdPerson: Word('обдуют', 3),
  masculinePast: Word('обдул', 3),
  femininePast: Word('обдула', 3),
  neuterPast: Word('обдуло', 3),
  pluralPast: Word('обдули', 3),
  imperativeInformal: Word('обдуй', 3),
  imperativeFormal: Word('обдуйте', 3),
  imperfect: [],
};

perfectVerbs.set(обдуть.name.text, обдуть);

export { обдуть };