import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вспыхнуть: PerfectVerb = {
  name: Word('вспыхнуть', 3),
  singular1stPerson: Word('вспыхну', 3),
  singular2ndPerson: Word('вспыхнешь', 3),
  singular3rdPerson: Word('вспыхнет', 3),
  plural1stPerson: Word('вспыхнем', 3),
  plural2ndPerson: Word('вспыхнете', 3),
  plural3rdPerson: Word('вспыхнут', 3),
  masculinePast: Word('вспыхнул', 3),
  femininePast: Word('вспыхнула', 3),
  neuterPast: Word('вспыхнуло', 3),
  pluralPast: Word('вспыхнули', 3),
  imperativeInformal: Word('вспыхни', 3),
  imperativeFormal: Word('вспыхните', 3),
  imperfect: ['вспыхивать'],
};

perfectVerbs.set(вспыхнуть.name.text, вспыхнуть);

export { вспыхнуть };