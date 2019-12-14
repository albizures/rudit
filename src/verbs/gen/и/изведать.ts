import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изведать: PerfectVerb = {
  name: Word('изведать', 3),
  singular1stPerson: Word('изведаю', 3),
  singular2ndPerson: Word('изведаешь', 3),
  singular3rdPerson: Word('изведает', 3),
  plural1stPerson: Word('изведаем', 3),
  plural2ndPerson: Word('изведаете', 3),
  plural3rdPerson: Word('изведают', 3),
  masculinePast: Word('изведал', 3),
  femininePast: Word('изведала', 3),
  neuterPast: Word('изведало', 3),
  pluralPast: Word('изведали', 3),
  imperativeInformal: Word('изведай', 3),
  imperativeFormal: Word('изведайте', 3),
  imperfect: [],
};

perfectVerbs.set(изведать.name.text, изведать);

export { изведать };