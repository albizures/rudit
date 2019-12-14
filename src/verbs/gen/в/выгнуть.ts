import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выгнуть: PerfectVerb = {
  name: Word('выгнуть', 1),
  singular1stPerson: Word('выгну', 4),
  singular2ndPerson: Word('выгнёшь', 4),
  singular3rdPerson: Word('выгнёт', 4),
  plural1stPerson: Word('выгнём', 4),
  plural2ndPerson: Word('выгнёте', 4),
  plural3rdPerson: Word('выгнут', 4),
  masculinePast: Word('выгнул', 1),
  femininePast: Word('выгнула', 1),
  neuterPast: Word('выгнуло', 1),
  pluralPast: Word('выгнули', 1),
  imperativeInformal: Word('выгни', 4),
  imperativeFormal: Word('выгните', 4),
  imperfect: [],
};

perfectVerbs.set(выгнуть.name.text, выгнуть);

export { выгнуть };