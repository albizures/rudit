import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перекувырнуть: PerfectVerb = {
  name: Word('перекувырнуть', 10),
  singular1stPerson: Word('перекувырну', 10),
  singular2ndPerson: Word('перекувырнёшь', 1),
  singular3rdPerson: Word('перекувырнёт', 1),
  plural1stPerson: Word('перекувырнём', 1),
  plural2ndPerson: Word('перекувырнёте', 1),
  plural3rdPerson: Word('перекувырнут', 10),
  masculinePast: Word('перекувырнул', 10),
  femininePast: Word('перекувырнула', 10),
  neuterPast: Word('перекувырнуло', 10),
  pluralPast: Word('перекувырнули', 10),
  imperativeInformal: Word('перекувырни', 10),
  imperativeFormal: Word('перекувырните', 10),
  imperfect: [],
};

perfectVerbs.set(перекувырнуть.name.text, перекувырнуть);

export { перекувырнуть };