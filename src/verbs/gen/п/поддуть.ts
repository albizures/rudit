import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поддуть: PerfectVerb = {
  name: Word('поддуть', 4),
  singular1stPerson: Word('поддую', 4),
  singular2ndPerson: Word('поддуешь', 4),
  singular3rdPerson: Word('поддует', 4),
  plural1stPerson: Word('поддуем', 4),
  plural2ndPerson: Word('поддуете', 4),
  plural3rdPerson: Word('поддуют', 4),
  masculinePast: Word('поддул', 4),
  femininePast: Word('поддула', 4),
  neuterPast: Word('поддуло', 4),
  pluralPast: Word('поддули', 4),
  imperativeInformal: Word('поддуй', 4),
  imperativeFormal: Word('поддуйте', 4),
  imperfect: [],
};

perfectVerbs.set(поддуть.name.text, поддуть);

export { поддуть };