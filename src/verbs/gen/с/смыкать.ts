import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смыкать: PerfectVerb = {
  name: Word('смыкать', 4),
  singular1stPerson: Word('смыкаю', 4),
  singular2ndPerson: Word('смыкаешь', 4),
  singular3rdPerson: Word('смыкает', 4),
  plural1stPerson: Word('смыкаем', 4),
  plural2ndPerson: Word('смыкаете', 4),
  plural3rdPerson: Word('смыкают', 4),
  masculinePast: Word('смыкал', 4),
  femininePast: Word('смыкала', 4),
  neuterPast: Word('смыкало', 4),
  pluralPast: Word('смыкали', 4),
  imperativeInformal: Word('смыкай', 4),
  imperativeFormal: Word('смыкайте', 4),
  imperfect: [],
};

perfectVerbs.set(смыкать.name.text, смыкать);

export { смыкать };