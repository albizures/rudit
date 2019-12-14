import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проголосовать: PerfectVerb = {
  name: Word('проголосовать', 10),
  singular1stPerson: Word('проголосую', 8),
  singular2ndPerson: Word('проголосуешь', 8),
  singular3rdPerson: Word('проголосует', 8),
  plural1stPerson: Word('проголосуем', 8),
  plural2ndPerson: Word('проголосуете', 8),
  plural3rdPerson: Word('проголосуют', 8),
  masculinePast: Word('проголосовал', 10),
  femininePast: Word('проголосовала', 10),
  neuterPast: Word('проголосовало', 10),
  pluralPast: Word('проголосовали', 10),
  imperativeInformal: Word('проголосуй', 8),
  imperativeFormal: Word('проголосуйте', 8),
  imperfect: ['голосовать'],
};

perfectVerbs.set(проголосовать.name.text, проголосовать);

export { проголосовать };