import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вытряхнуть: PerfectVerb = {
  name: Word('вытряхнуть', 1),
  singular1stPerson: Word('вытряхну', 1),
  singular2ndPerson: Word('вытряхнешь', 1),
  singular3rdPerson: Word('вытряхнет', 1),
  plural1stPerson: Word('вытряхнем', 1),
  plural2ndPerson: Word('вытряхнете', 1),
  plural3rdPerson: Word('вытряхнут', 1),
  masculinePast: Word('вытряхнул', 1),
  femininePast: Word('вытряхнула', 1),
  neuterPast: Word('вытряхнуло', 1),
  pluralPast: Word('вытряхнули', 1),
  imperativeInformal: Word('вытряхни', 1),
  imperativeFormal: Word('вытряхните', 1),
  imperfect: [],
};

perfectVerbs.set(вытряхнуть.name.text, вытряхнуть);

export { вытряхнуть };