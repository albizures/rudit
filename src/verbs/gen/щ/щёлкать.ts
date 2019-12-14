import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const щёлкать: PerfectVerb = {
  name: Word('щёлкать', 4),
  singular1stPerson: Word('щёлкаю', 4),
  singular2ndPerson: Word('щёлкаешь', 4),
  singular3rdPerson: Word('щёлкает', 4),
  plural1stPerson: Word('щёлкаем', 4),
  plural2ndPerson: Word('щёлкаете', 4),
  plural3rdPerson: Word('щёлкают', 4),
  masculinePast: Word('щёлкал', 4),
  femininePast: Word('щёлкала', 4),
  neuterPast: Word('щёлкало', 4),
  pluralPast: Word('щёлкали', 4),
  imperativeInformal: Word('щёлкай', 4),
  imperativeFormal: Word('щёлкайте', 4),
  imperfect: [],
};

perfectVerbs.set(щёлкать.name.text, щёлкать);

export { щёлкать };