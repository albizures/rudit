import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наделать: PerfectVerb = {
  name: Word('наделать', 3),
  singular1stPerson: Word('наделаю', 3),
  singular2ndPerson: Word('наделаешь', 3),
  singular3rdPerson: Word('наделает', 3),
  plural1stPerson: Word('наделаем', 3),
  plural2ndPerson: Word('наделаете', 3),
  plural3rdPerson: Word('наделают', 3),
  masculinePast: Word('наделал', 3),
  femininePast: Word('наделала', 3),
  neuterPast: Word('наделало', 3),
  pluralPast: Word('наделали', 3),
  imperativeInformal: Word('наделай', 3),
  imperativeFormal: Word('наделайте', 3),
  imperfect: [],
};

perfectVerbs.set(наделать.name.text, наделать);

export { наделать };