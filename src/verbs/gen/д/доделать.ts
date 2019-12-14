import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доделать: PerfectVerb = {
  name: Word('доделать', 3),
  singular1stPerson: Word('доделаю', 3),
  singular2ndPerson: Word('доделаешь', 3),
  singular3rdPerson: Word('доделает', 3),
  plural1stPerson: Word('доделаем', 3),
  plural2ndPerson: Word('доделаете', 3),
  plural3rdPerson: Word('доделают', 3),
  masculinePast: Word('доделал', 3),
  femininePast: Word('доделала', 3),
  neuterPast: Word('доделало', 3),
  pluralPast: Word('доделали', 3),
  imperativeInformal: Word('доделай', 3),
  imperativeFormal: Word('доделайте', 3),
  imperfect: [],
};

perfectVerbs.set(доделать.name.text, доделать);

export { доделать };