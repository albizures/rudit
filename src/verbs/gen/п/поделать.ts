import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поделать: PerfectVerb = {
  name: Word('поделать', 3),
  singular1stPerson: Word('поделаю', 3),
  singular2ndPerson: Word('поделаешь', 3),
  singular3rdPerson: Word('поделает', 3),
  plural1stPerson: Word('поделаем', 3),
  plural2ndPerson: Word('поделаете', 3),
  plural3rdPerson: Word('поделают', 3),
  masculinePast: Word('поделал', 3),
  femininePast: Word('поделала', 3),
  neuterPast: Word('поделало', 3),
  pluralPast: Word('поделали', 3),
  imperativeInformal: Word('поделай', 3),
  imperativeFormal: Word('поделайте', 3),
  imperfect: [],
};

perfectVerbs.set(поделать.name.text, поделать);

export { поделать };