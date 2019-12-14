import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стрельнуть: PerfectVerb = {
  name: Word('стрельнуть', 7),
  singular1stPerson: Word('стрельну', 7),
  singular2ndPerson: Word('стрельнёшь', 7),
  singular3rdPerson: Word('стрельнёт', 7),
  plural1stPerson: Word('стрельнём', 7),
  plural2ndPerson: Word('стрельнёте', 7),
  plural3rdPerson: Word('стрельнут', 7),
  masculinePast: Word('стрельнул', 7),
  femininePast: Word('стрельнула', 7),
  neuterPast: Word('стрельнуло', 7),
  pluralPast: Word('стрельнули', 7),
  imperativeInformal: Word('стрельни', 7),
  imperativeFormal: Word('стрельните', 7),
  imperfect: [],
};

perfectVerbs.set(стрельнуть.name.text, стрельнуть);

export { стрельнуть };