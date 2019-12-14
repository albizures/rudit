import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затолкнуть: PerfectVerb = {
  name: Word('затолкнуть', 7),
  singular1stPerson: Word('затолкну', 7),
  singular2ndPerson: Word('затолкнёшь', 1),
  singular3rdPerson: Word('затолкнёт', 1),
  plural1stPerson: Word('затолкнём', 1),
  plural2ndPerson: Word('затолкнёте', 1),
  plural3rdPerson: Word('затолкнут', 7),
  masculinePast: Word('затолкнул', 7),
  femininePast: Word('затолкнула', 7),
  neuterPast: Word('затолкнуло', 7),
  pluralPast: Word('затолкнули', 7),
  imperativeInformal: Word('затолкни', 7),
  imperativeFormal: Word('затолкните', 7),
  imperfect: [],
};

perfectVerbs.set(затолкнуть.name.text, затолкнуть);

export { затолкнуть };