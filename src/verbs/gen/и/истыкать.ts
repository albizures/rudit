import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const истыкать: PerfectVerb = {
  name: Word('истыкать', 3),
  singular1stPerson: Word('истыкаю', 3),
  singular2ndPerson: Word('истыкаешь', 3),
  singular3rdPerson: Word('истыкает', 3),
  plural1stPerson: Word('истыкаем', 3),
  plural2ndPerson: Word('истыкаете', 3),
  plural3rdPerson: Word('истыкают', 3),
  masculinePast: Word('истыкал', 3),
  femininePast: Word('истыкала', 3),
  neuterPast: Word('истыкало', 3),
  pluralPast: Word('истыкали', 3),
  imperativeInformal: Word('истыкай', 3),
  imperativeFormal: Word('истыкайте', 3),
  imperfect: [],
};

perfectVerbs.set(истыкать.name.text, истыкать);

export { истыкать };