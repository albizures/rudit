import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мешкать: PerfectVerb = {
  name: Word('мешкать', 1),
  singular1stPerson: Word('мешкаю', 1),
  singular2ndPerson: Word('мешкаешь', 1),
  singular3rdPerson: Word('мешкает', 1),
  plural1stPerson: Word('мешкаем', 1),
  plural2ndPerson: Word('мешкаете', 1),
  plural3rdPerson: Word('мешкают', 1),
  masculinePast: Word('мешкал', 1),
  femininePast: Word('мешкала', 1),
  neuterPast: Word('мешкало', 1),
  pluralPast: Word('мешкали', 1),
  imperativeInformal: Word('мешкай', 1),
  imperativeFormal: Word('мешкайте', 1),
  imperfect: [],
};

perfectVerbs.set(мешкать.name.text, мешкать);

export { мешкать };