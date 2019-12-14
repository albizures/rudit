import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const свершать: PerfectVerb = {
  name: Word('свершать', 5),
  singular1stPerson: Word('свершаю', 5),
  singular2ndPerson: Word('свершаешь', 5),
  singular3rdPerson: Word('свершает', 5),
  plural1stPerson: Word('свершаем', 5),
  plural2ndPerson: Word('свершаете', 5),
  plural3rdPerson: Word('свершают', 5),
  masculinePast: Word('свершал', 5),
  femininePast: Word('свершала', 5),
  neuterPast: Word('свершало', 5),
  pluralPast: Word('свершали', 5),
  imperativeInformal: Word('свершай', 5),
  imperativeFormal: Word('свершайте', 5),
  imperfect: [],
};

perfectVerbs.set(свершать.name.text, свершать);

export { свершать };