import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сделать: PerfectVerb = {
  name: Word('сделать', 2),
  singular1stPerson: Word('сделаю', 2),
  singular2ndPerson: Word('сделаешь', 2),
  singular3rdPerson: Word('сделает', 2),
  plural1stPerson: Word('сделаем', 2),
  plural2ndPerson: Word('сделаете', 2),
  plural3rdPerson: Word('сделают', 2),
  masculinePast: Word('сделал', 2),
  femininePast: Word('сделала', 2),
  neuterPast: Word('сделало', 2),
  pluralPast: Word('сделали', 2),
  imperativeInformal: Word('сделай', 2),
  imperativeFormal: Word('сделайте', 2),
  imperfect: ['делать'],
};

perfectVerbs.set(сделать.name.text, сделать);

export { сделать };