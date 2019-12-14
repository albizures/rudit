import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надуть: PerfectVerb = {
  name: Word('надуть', 3),
  singular1stPerson: Word('надую', 3),
  singular2ndPerson: Word('надуешь', 3),
  singular3rdPerson: Word('надует', 3),
  plural1stPerson: Word('надуем', 3),
  plural2ndPerson: Word('надуете', 3),
  plural3rdPerson: Word('надуют', 3),
  masculinePast: Word('надул', 3),
  femininePast: Word('надула', 3),
  neuterPast: Word('надуло', 3),
  pluralPast: Word('надули', 3),
  imperativeInformal: Word('надуй', 3),
  imperativeFormal: Word('надуйте', 3),
  imperfect: [],
};

perfectVerbs.set(надуть.name.text, надуть);

export { надуть };