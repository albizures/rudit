import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прореветь: PerfectVerb = {
  name: Word('прореветь', 6),
  singular1stPerson: Word('прореву', 6),
  singular2ndPerson: Word('проревёшь', 6),
  singular3rdPerson: Word('проревёт', 6),
  plural1stPerson: Word('проревём', 6),
  plural2ndPerson: Word('проревёте', 6),
  plural3rdPerson: Word('проревут', 6),
  masculinePast: Word('проревел', 6),
  femininePast: Word('проревела', 6),
  neuterPast: Word('проревело', 6),
  pluralPast: Word('проревели', 6),
  imperativeInformal: Word('прореви', 6),
  imperativeFormal: Word('проревите', 6),
  imperfect: [],
};

perfectVerbs.set(прореветь.name.text, прореветь);

export { прореветь };