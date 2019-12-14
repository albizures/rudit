import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прорасти: PerfectVerb = {
  name: Word('прорасти', 7),
  singular1stPerson: Word('прорасту', 7),
  singular2ndPerson: Word('прорастёшь', 4),
  singular3rdPerson: Word('прорастёт', 4),
  plural1stPerson: Word('прорастём', 4),
  plural2ndPerson: Word('прорастёте', 4),
  plural3rdPerson: Word('прорастут', 7),
  masculinePast: Word('пророс', 4),
  femininePast: Word('проросла', 7),
  neuterPast: Word('проросло', 7),
  pluralPast: Word('проросли', 7),
  imperativeInformal: Word('прорасти', 7),
  imperativeFormal: Word('прорастите', 7),
  imperfect: [],
};

perfectVerbs.set(прорасти.name.text, прорасти);

export { прорасти };