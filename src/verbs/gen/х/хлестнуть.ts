import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const хлестнуть: PerfectVerb = {
  name: Word('хлестнуть', 6),
  singular1stPerson: Word('хлестну', 6),
  singular2ndPerson: Word('хлестнёшь', 6),
  singular3rdPerson: Word('хлестнёт', 6),
  plural1stPerson: Word('хлестнём', 6),
  plural2ndPerson: Word('хлестнёте', 6),
  plural3rdPerson: Word('хлестнут', 6),
  masculinePast: Word('хлестнул', 6),
  femininePast: Word('хлестнула', 6),
  neuterPast: Word('хлестнуло', 6),
  pluralPast: Word('хлестнули', 6),
  imperativeInformal: Word('хлестни', 6),
  imperativeFormal: Word('хлестните', 6),
  imperfect: [],
};

perfectVerbs.set(хлестнуть.name.text, хлестнуть);

export { хлестнуть };