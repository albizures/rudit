import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прирасти: PerfectVerb = {
  name: Word('прирасти', 7),
  singular1stPerson: Word('прирасту', 7),
  singular2ndPerson: Word('прирастёшь', 7),
  singular3rdPerson: Word('прирастёт', 7),
  plural1stPerson: Word('прирастём', 7),
  plural2ndPerson: Word('прирастёте', 7),
  plural3rdPerson: Word('прирастут', 7),
  masculinePast: Word('прирос', 4),
  femininePast: Word('приросла', 7),
  neuterPast: Word('приросло', 7),
  pluralPast: Word('приросли', 7),
  imperativeInformal: Word('прирасти', 7),
  imperativeFormal: Word('прирастите', 7),
  imperfect: [],
};

perfectVerbs.set(прирасти.name.text, прирасти);

export { прирасти };