import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отшвырнуть: PerfectVerb = {
  name: Word('отшвырнуть', 7),
  singular1stPerson: Word('отшвырну', 7),
  singular2ndPerson: Word('отшвырнёшь', 7),
  singular3rdPerson: Word('отшвырнёт', 7),
  plural1stPerson: Word('отшвырнём', 7),
  plural2ndPerson: Word('отшвырнёте', 7),
  plural3rdPerson: Word('отшвырнут', 7),
  masculinePast: Word('отшвырнул', 7),
  femininePast: Word('отшвырнула', 7),
  neuterPast: Word('отшвырнуло', 7),
  pluralPast: Word('отшвырнули', 7),
  imperativeInformal: Word('отшвырни', 7),
  imperativeFormal: Word('отшвырните', 7),
  imperfect: [],
};

perfectVerbs.set(отшвырнуть.name.text, отшвырнуть);

export { отшвырнуть };