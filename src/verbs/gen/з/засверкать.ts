import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const засверкать: PerfectVerb = {
  name: Word('засверкать', 7),
  singular1stPerson: Word('засверкаю', 7),
  singular2ndPerson: Word('засверкаешь', 7),
  singular3rdPerson: Word('засверкает', 7),
  plural1stPerson: Word('засверкаем', 7),
  plural2ndPerson: Word('засверкаете', 7),
  plural3rdPerson: Word('засверкают', 7),
  masculinePast: Word('засверкал', 7),
  femininePast: Word('засверкала', 7),
  neuterPast: Word('засверкало', 7),
  pluralPast: Word('засверкали', 7),
  imperativeInformal: Word('засверкай', 7),
  imperativeFormal: Word('засверкайте', 7),
  imperfect: [],
};

perfectVerbs.set(засверкать.name.text, засверкать);

export { засверкать };