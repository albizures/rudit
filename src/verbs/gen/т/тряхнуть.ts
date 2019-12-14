import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тряхнуть: PerfectVerb = {
  name: Word('тряхнуть', 5),
  singular1stPerson: Word('тряхну', 5),
  singular2ndPerson: Word('тряхнёшь', 5),
  singular3rdPerson: Word('тряхнёт', 5),
  plural1stPerson: Word('тряхнём', 5),
  plural2ndPerson: Word('тряхнёте', 5),
  plural3rdPerson: Word('тряхнут', 5),
  masculinePast: Word('тряхнул', 5),
  femininePast: Word('тряхнула', 5),
  neuterPast: Word('тряхнуло', 5),
  pluralPast: Word('тряхнули', 5),
  imperativeInformal: Word('тряхни', 5),
  imperativeFormal: Word('тряхните', 5),
  imperfect: [],
};

perfectVerbs.set(тряхнуть.name.text, тряхнуть);

export { тряхнуть };