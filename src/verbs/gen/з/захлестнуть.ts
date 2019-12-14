import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const захлестнуть: PerfectVerb = {
  name: Word('захлестнуть', 8),
  singular1stPerson: Word('захлестну', 8),
  singular2ndPerson: Word('захлестнёшь', 1),
  singular3rdPerson: Word('захлестнёт', 1),
  plural1stPerson: Word('захлестнём', 1),
  plural2ndPerson: Word('захлестнёте', 1),
  plural3rdPerson: Word('захлестнут', 8),
  masculinePast: Word('захлестнул', 8),
  femininePast: Word('захлестнула', 8),
  neuterPast: Word('захлестнуло', 8),
  pluralPast: Word('захлестнули', 8),
  imperativeInformal: Word('захлестни', 8),
  imperativeFormal: Word('захлестните', 8),
  imperfect: [],
};

perfectVerbs.set(захлестнуть.name.text, захлестнуть);

export { захлестнуть };