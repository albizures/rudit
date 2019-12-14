import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const развратничать: PerfectVerb = {
  name: Word('развратничать', 5),
  singular1stPerson: Word('развратничаю', 5),
  singular2ndPerson: Word('развратничаешь', 5),
  singular3rdPerson: Word('развратничает', 5),
  plural1stPerson: Word('развратничаем', 5),
  plural2ndPerson: Word('развратничаете', 5),
  plural3rdPerson: Word('развратничают', 5),
  masculinePast: Word('развратничал', 5),
  femininePast: Word('развратничала', 5),
  neuterPast: Word('развратничало', 5),
  pluralPast: Word('развратничали', 5),
  imperativeInformal: Word('развратничай', 5),
  imperativeFormal: Word('развратничайте', 5),
  imperfect: [],
};

perfectVerbs.set(развратничать.name.text, развратничать);

export { развратничать };