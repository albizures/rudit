import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вделать: PerfectVerb = {
  name: Word('вделать', 2),
  singular1stPerson: Word('вделаю', 2),
  singular2ndPerson: Word('вделаешь', 2),
  singular3rdPerson: Word('вделает', 2),
  plural1stPerson: Word('вделаем', 2),
  plural2ndPerson: Word('вделаете', 2),
  plural3rdPerson: Word('вделают', 2),
  masculinePast: Word('вделал', 2),
  femininePast: Word('вделала', 2),
  neuterPast: Word('вделало', 2),
  pluralPast: Word('вделали', 2),
  imperativeInformal: Word('вделай', 2),
  imperativeFormal: Word('вделайте', 2),
  imperfect: [],
};

perfectVerbs.set(вделать.name.text, вделать);

export { вделать };