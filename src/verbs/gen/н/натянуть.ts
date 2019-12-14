import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const натянуть: PerfectVerb = {
  name: Word('натянуть', 5),
  singular1stPerson: Word('натяну', 5),
  singular2ndPerson: Word('натянешь', 3),
  singular3rdPerson: Word('натянет', 3),
  plural1stPerson: Word('натянем', 3),
  plural2ndPerson: Word('натянете', 3),
  plural3rdPerson: Word('натянут', 3),
  masculinePast: Word('натянул', 5),
  femininePast: Word('натянула', 5),
  neuterPast: Word('натянуло', 5),
  pluralPast: Word('натянули', 5),
  imperativeInformal: Word('натяни', 5),
  imperativeFormal: Word('натяните', 5),
  imperfect: [],
};

perfectVerbs.set(натянуть.name.text, натянуть);

export { натянуть };