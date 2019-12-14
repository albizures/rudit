import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изогнуть: PerfectVerb = {
  name: Word('изогнуть', 5),
  singular1stPerson: Word('изогну', 5),
  singular2ndPerson: Word('изогнёшь', 5),
  singular3rdPerson: Word('изогнёт', 5),
  plural1stPerson: Word('изогнём', 5),
  plural2ndPerson: Word('изогнёте', 5),
  plural3rdPerson: Word('изогнут', 5),
  masculinePast: Word('изогнул', 5),
  femininePast: Word('изогнула', 5),
  neuterPast: Word('изогнуло', 5),
  pluralPast: Word('изогнули', 5),
  imperativeInformal: Word('изогни', 5),
  imperativeFormal: Word('изогните', 5),
  imperfect: [],
};

perfectVerbs.set(изогнуть.name.text, изогнуть);

export { изогнуть };