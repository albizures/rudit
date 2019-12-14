import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const харкать: PerfectVerb = {
  name: Word('харкать', 1),
  singular1stPerson: Word('харкаю', 1),
  singular2ndPerson: Word('харкаешь', 1),
  singular3rdPerson: Word('харкает', 1),
  plural1stPerson: Word('харкаем', 1),
  plural2ndPerson: Word('харкаете', 1),
  plural3rdPerson: Word('харкают', 1),
  masculinePast: Word('харкал', 1),
  femininePast: Word('харкала', 1),
  neuterPast: Word('харкало', 1),
  pluralPast: Word('харкали', 1),
  imperativeInformal: Word('харкай', 1),
  imperativeFormal: Word('харкайте', 1),
  imperfect: [],
};

perfectVerbs.set(харкать.name.text, харкать);

export { харкать };