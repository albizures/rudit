import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смолкать: PerfectVerb = {
  name: Word('смолкать', 5),
  singular1stPerson: Word('смолкаю', 5),
  singular2ndPerson: Word('смолкаешь', 5),
  singular3rdPerson: Word('смолкает', 5),
  plural1stPerson: Word('смолкаем', 5),
  plural2ndPerson: Word('смолкаете', 5),
  plural3rdPerson: Word('смолкают', 5),
  masculinePast: Word('смолкал', 5),
  femininePast: Word('смолкала', 5),
  neuterPast: Word('смолкало', 5),
  pluralPast: Word('смолкали', 5),
  imperativeInformal: Word('смолкай', 5),
  imperativeFormal: Word('смолкайте', 5),
  imperfect: [],
};

perfectVerbs.set(смолкать.name.text, смолкать);

export { смолкать };