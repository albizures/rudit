import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проделать: PerfectVerb = {
  name: Word('проделать', 4),
  singular1stPerson: Word('проделаю', 4),
  singular2ndPerson: Word('проделаешь', 4),
  singular3rdPerson: Word('проделает', 4),
  plural1stPerson: Word('проделаем', 4),
  plural2ndPerson: Word('проделаете', 4),
  plural3rdPerson: Word('проделают', 4),
  masculinePast: Word('проделал', 4),
  femininePast: Word('проделала', 4),
  neuterPast: Word('проделало', 4),
  pluralPast: Word('проделали', 4),
  imperativeInformal: Word('проделай', 4),
  imperativeFormal: Word('проделайте', 4),
  imperfect: [],
};

perfectVerbs.set(проделать.name.text, проделать);

export { проделать };