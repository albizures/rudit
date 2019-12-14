import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const искомкать: PerfectVerb = {
  name: Word('искомкать', 3),
  singular1stPerson: Word('искомкаю', 3),
  singular2ndPerson: Word('искомкаешь', 3),
  singular3rdPerson: Word('искомкает', 3),
  plural1stPerson: Word('искомкаем', 3),
  plural2ndPerson: Word('искомкаете', 3),
  plural3rdPerson: Word('искомкают', 3),
  masculinePast: Word('искомкал', 3),
  femininePast: Word('искомкала', 3),
  neuterPast: Word('искомкало', 3),
  pluralPast: Word('искомкали', 3),
  imperativeInformal: Word('искомкай', 3),
  imperativeFormal: Word('искомкайте', 3),
  imperfect: [],
};

perfectVerbs.set(искомкать.name.text, искомкать);

export { искомкать };