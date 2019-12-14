import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отстегнуть: PerfectVerb = {
  name: Word('отстегнуть', 7),
  singular1stPerson: Word('отстегну', 7),
  singular2ndPerson: Word('отстегнёшь', 4),
  singular3rdPerson: Word('отстегнёт', 4),
  plural1stPerson: Word('отстегнём', 4),
  plural2ndPerson: Word('отстегнёте', 4),
  plural3rdPerson: Word('отстегнут', 7),
  masculinePast: Word('отстегнул', 7),
  femininePast: Word('отстегнула', 7),
  neuterPast: Word('отстегнуло', 7),
  pluralPast: Word('отстегнули', 7),
  imperativeInformal: Word('отстегни', 7),
  imperativeFormal: Word('отстегните', 7),
  imperfect: [],
};

perfectVerbs.set(отстегнуть.name.text, отстегнуть);

export { отстегнуть };