import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прошмыгнуть: PerfectVerb = {
  name: Word('прошмыгнуть', 8),
  singular1stPerson: Word('прошмыгну', 8),
  singular2ndPerson: Word('прошмыгнёшь', 2),
  singular3rdPerson: Word('прошмыгнёт', 2),
  plural1stPerson: Word('прошмыгнём', 2),
  plural2ndPerson: Word('прошмыгнёте', 10),
  plural3rdPerson: Word('прошмыгнут', 8),
  masculinePast: Word('прошмыгнул', 8),
  femininePast: Word('прошмыгнула', 8),
  neuterPast: Word('прошмыгнуло', 8),
  pluralPast: Word('прошмыгнули', 8),
  imperativeInformal: Word('прошмыгни', 8),
  imperativeFormal: Word('прошмыгните', 8),
  imperfect: [],
};

perfectVerbs.set(прошмыгнуть.name.text, прошмыгнуть);

export { прошмыгнуть };