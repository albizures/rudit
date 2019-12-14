import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обокрасть: PerfectVerb = {
  name: Word('обокрасть', 5),
  singular1stPerson: Word('обкраду', 6),
  singular2ndPerson: Word('обкрадёшь', 4),
  singular3rdPerson: Word('обкрадёт', 4),
  plural1stPerson: Word('обкрадём', 4),
  plural2ndPerson: Word('обкрадёте', 4),
  plural3rdPerson: Word('обкрадут', 6),
  masculinePast: Word('обокрал', 5),
  femininePast: Word('обокрала', 5),
  neuterPast: Word('обокрало', 5),
  pluralPast: Word('обокрали', 5),
  imperativeInformal: Word('обкради', 6),
  imperativeFormal: Word('обкрадите', 6),
  imperfect: [],
};

perfectVerbs.set(обокрасть.name.text, обокрасть);

export { обокрасть };