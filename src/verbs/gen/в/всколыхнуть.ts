import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const всколыхнуть: PerfectVerb = {
  name: Word('всколыхнуть', 8),
  singular1stPerson: Word('всколыхну', 8),
  singular2ndPerson: Word('всколыхнёшь', 8),
  singular3rdPerson: Word('всколыхнёт', 8),
  plural1stPerson: Word('всколыхнём', 8),
  plural2ndPerson: Word('всколыхнёте', 8),
  plural3rdPerson: Word('всколыхнут', 8),
  masculinePast: Word('всколыхнул', 8),
  femininePast: Word('всколыхнула', 8),
  neuterPast: Word('всколыхнуло', 8),
  pluralPast: Word('всколыхнули', 8),
  imperativeInformal: Word('всколыхни', 8),
  imperativeFormal: Word('всколыхните', 8),
  imperfect: [],
};

perfectVerbs.set(всколыхнуть.name.text, всколыхнуть);

export { всколыхнуть };