import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вспорхнуть: PerfectVerb = {
  name: Word('вспорхнуть', 7),
  singular1stPerson: Word('вспорхну', 7),
  singular2ndPerson: Word('вспорхнёшь', 3),
  singular3rdPerson: Word('вспорхнёт', 3),
  plural1stPerson: Word('вспорхнём', 3),
  plural2ndPerson: Word('вспорхнёте', 9),
  plural3rdPerson: Word('вспорхнут', 7),
  masculinePast: Word('вспорхнул', 7),
  femininePast: Word('вспорхнула', 7),
  neuterPast: Word('вспорхнуло', 7),
  pluralPast: Word('вспорхнули', 7),
  imperativeInformal: Word('вспорхни', 7),
  imperativeFormal: Word('вспорхните', 7),
  imperfect: [],
};

perfectVerbs.set(вспорхнуть.name.text, вспорхнуть);

export { вспорхнуть };