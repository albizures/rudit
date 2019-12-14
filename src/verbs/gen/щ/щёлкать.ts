import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const щёлкать: PerfectVerb = {
  name: Word('щёлкать', 1),
  singular1stPerson: Word('щёлкаю', 1),
  singular2ndPerson: Word('щёлкаешь', 1),
  singular3rdPerson: Word('щёлкает', 1),
  plural1stPerson: Word('щёлкаем', 1),
  plural2ndPerson: Word('щёлкаете', 1),
  plural3rdPerson: Word('щёлкают', 1),
  masculinePast: Word('щёлкал', 1),
  femininePast: Word('щёлкала', 1),
  neuterPast: Word('щёлкало', 1),
  pluralPast: Word('щёлкали', 1),
  imperativeInformal: Word('щёлкай', 1),
  imperativeFormal: Word('щёлкайте', 1),
  imperfect: [],
};

perfectVerbs.set(щёлкать.name.text, щёлкать);

export { щёлкать };