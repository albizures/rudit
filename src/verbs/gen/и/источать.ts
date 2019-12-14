import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const источать: PerfectVerb = {
  name: Word('источать', 5),
  singular1stPerson: Word('источаю', 5),
  singular2ndPerson: Word('источаешь', 5),
  singular3rdPerson: Word('источает', 5),
  plural1stPerson: Word('источаем', 5),
  plural2ndPerson: Word('источаете', 5),
  plural3rdPerson: Word('источают', 5),
  masculinePast: Word('источал', 5),
  femininePast: Word('источала', 5),
  neuterPast: Word('источало', 5),
  pluralPast: Word('источали', 5),
  imperativeInformal: Word('источай', 5),
  imperativeFormal: Word('источайте', 5),
  imperfect: [],
};

perfectVerbs.set(источать.name.text, источать);

export { источать };