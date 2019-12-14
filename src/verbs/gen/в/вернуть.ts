import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вернуть: PerfectVerb = {
  name: Word('вернуть', 4),
  singular1stPerson: Word('верну', 4),
  singular2ndPerson: Word('вернёшь', 4),
  singular3rdPerson: Word('вернёт', 4),
  plural1stPerson: Word('вернём', 4),
  plural2ndPerson: Word('вернёте', 4),
  plural3rdPerson: Word('вернут', 4),
  masculinePast: Word('вернул', 4),
  femininePast: Word('вернула', 4),
  neuterPast: Word('вернуло', 4),
  pluralPast: Word('вернули', 4),
  imperativeInformal: Word('верни', 4),
  imperativeFormal: Word('верните', 4),
  imperfect: ['возвращать'],
};

perfectVerbs.set(вернуть.name.text, вернуть);

export { вернуть };