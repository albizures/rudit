import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const втыкать: PerfectVerb = {
  name: Word('втыкать', 4),
  singular1stPerson: Word('втыкаю', 4),
  singular2ndPerson: Word('втыкаешь', 4),
  singular3rdPerson: Word('втыкает', 4),
  plural1stPerson: Word('втыкаем', 4),
  plural2ndPerson: Word('втыкаете', 4),
  plural3rdPerson: Word('втыкают', 4),
  masculinePast: Word('втыкал', 4),
  femininePast: Word('втыкала', 4),
  neuterPast: Word('втыкало', 4),
  pluralPast: Word('втыкали', 4),
  imperativeInformal: Word('втыкай', 4),
  imperativeFormal: Word('втыкайте', 4),
  imperfect: [],
};

perfectVerbs.set(втыкать.name.text, втыкать);

export { втыкать };