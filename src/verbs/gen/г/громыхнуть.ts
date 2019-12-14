import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const громыхнуть: PerfectVerb = {
  name: Word('громыхнуть', 7),
  singular1stPerson: Word('громыхну', 7),
  singular2ndPerson: Word('громыхнёшь', 2),
  singular3rdPerson: Word('громыхнёт', 2),
  plural1stPerson: Word('громыхнём', 2),
  plural2ndPerson: Word('громыхнёте', 9),
  plural3rdPerson: Word('громыхнут', 7),
  masculinePast: Word('громыхнул', 7),
  femininePast: Word('громыхнула', 7),
  neuterPast: Word('громыхнуло', 7),
  pluralPast: Word('громыхнули', 7),
  imperativeInformal: Word('громыхни', 7),
  imperativeFormal: Word('громыхните', 7),
  imperfect: [],
};

perfectVerbs.set(громыхнуть.name.text, громыхнуть);

export { громыхнуть };