import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const чавкать: PerfectVerb = {
  name: Word('чавкать', 1),
  singular1stPerson: Word('чавкаю', 1),
  singular2ndPerson: Word('чавкаешь', 1),
  singular3rdPerson: Word('чавкает', 1),
  plural1stPerson: Word('чавкаем', 1),
  plural2ndPerson: Word('чавкаете', 1),
  plural3rdPerson: Word('чавкают', 1),
  masculinePast: Word('чавкал', 1),
  femininePast: Word('чавкала', 1),
  neuterPast: Word('чавкало', 1),
  pluralPast: Word('чавкали', 1),
  imperativeInformal: Word('чавкай', 1),
  imperativeFormal: Word('чавкайте', 1),
  imperfect: [],
};

perfectVerbs.set(чавкать.name.text, чавкать);

export { чавкать };