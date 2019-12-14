import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отряхнуть: PerfectVerb = {
  name: Word('отряхнуть', 6),
  singular1stPerson: Word('отряхну', 6),
  singular2ndPerson: Word('отряхнёшь', 6),
  singular3rdPerson: Word('отряхнёт', 6),
  plural1stPerson: Word('отряхнём', 6),
  plural2ndPerson: Word('отряхнёте', 6),
  plural3rdPerson: Word('отряхнут', 6),
  masculinePast: Word('отряхнул', 6),
  femininePast: Word('отряхнула', 6),
  neuterPast: Word('отряхнуло', 6),
  pluralPast: Word('отряхнули', 6),
  imperativeInformal: Word('отряхни', 6),
  imperativeFormal: Word('отряхните', 6),
  imperfect: [],
};

perfectVerbs.set(отряхнуть.name.text, отряхнуть);

export { отряхнуть };