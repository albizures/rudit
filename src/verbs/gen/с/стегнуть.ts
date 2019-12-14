import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стегнуть: PerfectVerb = {
  name: Word('стегнуть', 5),
  singular1stPerson: Word('стегну', 5),
  singular2ndPerson: Word('стегнёшь', 5),
  singular3rdPerson: Word('стегнёт', 5),
  plural1stPerson: Word('стегнём', 5),
  plural2ndPerson: Word('стегнёте', 5),
  plural3rdPerson: Word('стегнут', 5),
  masculinePast: Word('стегнул', 5),
  femininePast: Word('стегнула', 5),
  neuterPast: Word('стегнуло', 5),
  pluralPast: Word('стегнули', 5),
  imperativeInformal: Word('стегни', 5),
  imperativeFormal: Word('стегните', 5),
  imperfect: [],
};

perfectVerbs.set(стегнуть.name.text, стегнуть);

export { стегнуть };