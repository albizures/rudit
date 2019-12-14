import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выделать: PerfectVerb = {
  name: Word('выделать', 1),
  singular1stPerson: Word('выделаю', 1),
  singular2ndPerson: Word('выделаешь', 1),
  singular3rdPerson: Word('выделает', 1),
  plural1stPerson: Word('выделаем', 1),
  plural2ndPerson: Word('выделаете', 1),
  plural3rdPerson: Word('выделают', 1),
  masculinePast: Word('выделал', 1),
  femininePast: Word('выделала', 1),
  neuterPast: Word('выделало', 1),
  pluralPast: Word('выделали', 1),
  imperativeInformal: Word('выделай', 1),
  imperativeFormal: Word('выделайте', 1),
  imperfect: [],
};

perfectVerbs.set(выделать.name.text, выделать);

export { выделать };