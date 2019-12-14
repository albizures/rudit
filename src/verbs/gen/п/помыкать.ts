import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const помыкать: PerfectVerb = {
  name: Word('помыкать', 5),
  singular1stPerson: Word('помыкаю', 5),
  singular2ndPerson: Word('помыкаешь', 5),
  singular3rdPerson: Word('помыкает', 5),
  plural1stPerson: Word('помыкаем', 5),
  plural2ndPerson: Word('помыкаете', 5),
  plural3rdPerson: Word('помыкают', 5),
  masculinePast: Word('помыкал', 5),
  femininePast: Word('помыкала', 5),
  neuterPast: Word('помыкало', 5),
  pluralPast: Word('помыкали', 5),
  imperativeInformal: Word('помыкай', 5),
  imperativeFormal: Word('помыкайте', 5),
  imperfect: [],
};

perfectVerbs.set(помыкать.name.text, помыкать);

export { помыкать };