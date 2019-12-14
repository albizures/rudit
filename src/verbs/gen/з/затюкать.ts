import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затюкать: PerfectVerb = {
  name: Word('затюкать', 3),
  singular1stPerson: Word('затюкаю', 3),
  singular2ndPerson: Word('затюкаешь', 3),
  singular3rdPerson: Word('затюкает', 3),
  plural1stPerson: Word('затюкаем', 3),
  plural2ndPerson: Word('затюкаете', 3),
  plural3rdPerson: Word('затюкают', 3),
  masculinePast: Word('затюкал', 3),
  femininePast: Word('затюкала', 3),
  neuterPast: Word('затюкало', 3),
  pluralPast: Word('затюкали', 3),
  imperativeInformal: Word('затюкай', 3),
  imperativeFormal: Word('затюкайте', 3),
  imperfect: [],
};

perfectVerbs.set(затюкать.name.text, затюкать);

export { затюкать };