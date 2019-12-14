import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закинуть: PerfectVerb = {
  name: Word('закинуть', 3),
  singular1stPerson: Word('закину', 3),
  singular2ndPerson: Word('закинешь', 3),
  singular3rdPerson: Word('закинет', 3),
  plural1stPerson: Word('закинем', 3),
  plural2ndPerson: Word('закинете', 3),
  plural3rdPerson: Word('закинут', 3),
  masculinePast: Word('закинул', 3),
  femininePast: Word('закинула', 3),
  neuterPast: Word('закинуло', 3),
  pluralPast: Word('закинули', 3),
  imperativeInformal: Word('закинь', 3),
  imperativeFormal: Word('закиньте', 3),
  imperfect: [],
};

perfectVerbs.set(закинуть.name.text, закинуть);

export { закинуть };