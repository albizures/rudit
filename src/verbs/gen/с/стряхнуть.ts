import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стряхнуть: PerfectVerb = {
  name: Word('стряхнуть', 6),
  singular1stPerson: Word('стряхну', 6),
  singular2ndPerson: Word('стряхнёшь', 6),
  singular3rdPerson: Word('стряхнёт', 6),
  plural1stPerson: Word('стряхнём', 6),
  plural2ndPerson: Word('стряхнёте', 6),
  plural3rdPerson: Word('стряхнут', 6),
  masculinePast: Word('стряхнул', 6),
  femininePast: Word('стряхнула', 6),
  neuterPast: Word('стряхнуло', 6),
  pluralPast: Word('стряхнули', 6),
  imperativeInformal: Word('стряхни', 6),
  imperativeFormal: Word('стряхните', 6),
  imperfect: [],
};

perfectVerbs.set(стряхнуть.name.text, стряхнуть);

export { стряхнуть };