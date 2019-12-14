import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прилипнуть: PerfectVerb = {
  name: Word('прилипнуть', 4),
  singular1stPerson: Word('прилипну', 4),
  singular2ndPerson: Word('прилипнешь', 4),
  singular3rdPerson: Word('прилипнет', 4),
  plural1stPerson: Word('прилипнем', 4),
  plural2ndPerson: Word('прилипнете', 4),
  plural3rdPerson: Word('прилипнут', 4),
  masculinePast: Word('прилип,прили'пнул', 4),
  femininePast: Word('прилипла,прили'пнула', 4),
  neuterPast: Word('прилипло,прили'пнуло', 4),
  pluralPast: Word('прилипли,прили'пнули', 4),
  imperativeInformal: Word('прилипни', 4),
  imperativeFormal: Word('прилипните', 4),
  imperfect: ['прилипать'],
};

perfectVerbs.set(прилипнуть.name.text, прилипнуть);

export { прилипнуть };