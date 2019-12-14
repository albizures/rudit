import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нырнуть: PerfectVerb = {
  name: Word('нырнуть', 4),
  singular1stPerson: Word('нырну', 4),
  singular2ndPerson: Word('нырнёшь', 4),
  singular3rdPerson: Word('нырнёт', 4),
  plural1stPerson: Word('нырнём', 4),
  plural2ndPerson: Word('нырнёте', 4),
  plural3rdPerson: Word('нырнут', 4),
  masculinePast: Word('нырнул', 4),
  femininePast: Word('нырнула', 4),
  neuterPast: Word('нырнуло', 4),
  pluralPast: Word('нырнули', 4),
  imperativeInformal: Word('нырни', 4),
  imperativeFormal: Word('нырните', 4),
  imperfect: ['нырять'],
};

perfectVerbs.set(нырнуть.name.text, нырнуть);

export { нырнуть };