import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поднатореть: PerfectVerb = {
  name: Word('поднатореть', 8),
  singular1stPerson: Word('поднаторею', 8),
  singular2ndPerson: Word('поднатореешь', 8),
  singular3rdPerson: Word('поднатореет', 8),
  plural1stPerson: Word('поднатореем', 8),
  plural2ndPerson: Word('поднатореете', 8),
  plural3rdPerson: Word('поднатореют', 8),
  masculinePast: Word('поднаторел', 8),
  femininePast: Word('поднаторела', 8),
  neuterPast: Word('поднаторело', 8),
  pluralPast: Word('поднаторели', 8),
  imperativeInformal: Word('поднаторей', 8),
  imperativeFormal: Word('поднаторейте', 8),
  imperfect: [],
};

perfectVerbs.set(поднатореть.name.text, поднатореть);

export { поднатореть };