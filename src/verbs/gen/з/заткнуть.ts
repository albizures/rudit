import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заткнуть: PerfectVerb = {
  name: Word('заткнуть', 5),
  singular1stPerson: Word('заткну', 5),
  singular2ndPerson: Word('заткнёшь', 1),
  singular3rdPerson: Word('заткнёт', 1),
  plural1stPerson: Word('заткнём', 1),
  plural2ndPerson: Word('заткнёте', 1),
  plural3rdPerson: Word('заткнут', 5),
  masculinePast: Word('заткнул', 5),
  femininePast: Word('заткнула', 5),
  neuterPast: Word('заткнуло', 5),
  pluralPast: Word('заткнули', 5),
  imperativeInformal: Word('заткни', 5),
  imperativeFormal: Word('заткните', 5),
  imperfect: ['затыкать'],
};

perfectVerbs.set(заткнуть.name.text, заткнуть);

export { заткнуть };