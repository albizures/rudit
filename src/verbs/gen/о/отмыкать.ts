import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отмыкать: PerfectVerb = {
  name: Word('отмыкать', 3),
  singular1stPerson: Word('отмыкаю', 3),
  singular2ndPerson: Word('отмыкаешь', 3),
  singular3rdPerson: Word('отмыкает', 3),
  plural1stPerson: Word('отмыкаем', 3),
  plural2ndPerson: Word('отмыкаете', 3),
  plural3rdPerson: Word('отмыкают', 3),
  masculinePast: Word('отмыкал', 3),
  femininePast: Word('отмыкала', 3),
  neuterPast: Word('отмыкало', 3),
  pluralPast: Word('отмыкали', 3),
  imperativeInformal: Word('отмыкай', 3),
  imperativeFormal: Word('отмыкайте', 3),
  imperfect: [],
};

perfectVerbs.set(отмыкать.name.text, отмыкать);

export { отмыкать };