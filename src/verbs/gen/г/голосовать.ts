import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const голосовать: PerfectVerb = {
  name: Word('голосовать', 7),
  singular1stPerson: Word('голосую', 5),
  singular2ndPerson: Word('голосуешь', 5),
  singular3rdPerson: Word('голосует', 5),
  plural1stPerson: Word('голосуем', 5),
  plural2ndPerson: Word('голосуете', 5),
  plural3rdPerson: Word('голосуют', 5),
  masculinePast: Word('голосовал', 7),
  femininePast: Word('голосовала', 7),
  neuterPast: Word('голосовало', 7),
  pluralPast: Word('голосовали', 7),
  imperativeInformal: Word('голосуй', 5),
  imperativeFormal: Word('голосуйте', 5),
  imperfect: ['проголосовать'],
};

perfectVerbs.set(голосовать.name.text, голосовать);

export { голосовать };