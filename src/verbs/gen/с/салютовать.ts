import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const салютовать: PerfectVerb = {
  name: Word('салютовать', 7),
  singular1stPerson: Word('салютую', 5),
  singular2ndPerson: Word('салютуешь', 5),
  singular3rdPerson: Word('салютует', 5),
  plural1stPerson: Word('салютуем', 5),
  plural2ndPerson: Word('салютуете', 5),
  plural3rdPerson: Word('салютуют', 5),
  masculinePast: Word('салютовал', 7),
  femininePast: Word('салютовала', 7),
  neuterPast: Word('салютовало', 7),
  pluralPast: Word('салютовали', 7),
  imperativeInformal: Word('салютуй', 5),
  imperativeFormal: Word('салютуйте', 5),
  imperfect: [],
};

perfectVerbs.set(салютовать.name.text, салютовать);

export { салютовать };