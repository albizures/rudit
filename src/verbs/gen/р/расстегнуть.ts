import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расстегнуть: PerfectVerb = {
  name: Word('расстегнуть', 8),
  singular1stPerson: Word('расстегну', 8),
  singular2ndPerson: Word('расстегнёшь', 1),
  singular3rdPerson: Word('расстегнёт', 1),
  plural1stPerson: Word('расстегнём', 1),
  plural2ndPerson: Word('расстегнёте', 1),
  plural3rdPerson: Word('расстегнут', 8),
  masculinePast: Word('расстегнул', 8),
  femininePast: Word('расстегнула', 8),
  neuterPast: Word('расстегнуло', 8),
  pluralPast: Word('расстегнули', 8),
  imperativeInformal: Word('расстегни', 8),
  imperativeFormal: Word('расстегните', 8),
  imperfect: [],
};

perfectVerbs.set(расстегнуть.name.text, расстегнуть);

export { расстегнуть };