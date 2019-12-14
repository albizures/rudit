import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const попрекнуть: PerfectVerb = {
  name: Word('попрекнуть', 7),
  singular1stPerson: Word('попрекну', 7),
  singular2ndPerson: Word('попрекнёшь', 7),
  singular3rdPerson: Word('попрекнёт', 7),
  plural1stPerson: Word('попрекнём', 7),
  plural2ndPerson: Word('попрекнёте', 7),
  plural3rdPerson: Word('попрекнут', 7),
  masculinePast: Word('попрекнул', 7),
  femininePast: Word('попрекнула', 7),
  neuterPast: Word('попрекнуло', 7),
  pluralPast: Word('попрекнули', 7),
  imperativeInformal: Word('попрекни', 7),
  imperativeFormal: Word('попрекните', 7),
  imperfect: [],
};

perfectVerbs.set(попрекнуть.name.text, попрекнуть);

export { попрекнуть };