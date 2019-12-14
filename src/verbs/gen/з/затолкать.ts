import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затолкать: PerfectVerb = {
  name: Word('затолкать', 6),
  singular1stPerson: Word('затолкаю', 6),
  singular2ndPerson: Word('затолкаешь', 6),
  singular3rdPerson: Word('затолкает', 6),
  plural1stPerson: Word('затолкаем', 6),
  plural2ndPerson: Word('затолкаете', 6),
  plural3rdPerson: Word('затолкают', 6),
  masculinePast: Word('затолкал', 6),
  femininePast: Word('затолкала', 6),
  neuterPast: Word('затолкало', 6),
  pluralPast: Word('затолкали', 6),
  imperativeInformal: Word('затолкай', 6),
  imperativeFormal: Word('затолкайте', 6),
  imperfect: [],
};

perfectVerbs.set(затолкать.name.text, затолкать);

export { затолкать };