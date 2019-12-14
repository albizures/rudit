import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const арестовать: PerfectVerb = {
  name: Word('арестовать', 7),
  singular1stPerson: Word('арестую', 5),
  singular2ndPerson: Word('арестуешь', 5),
  singular3rdPerson: Word('арестует', 5),
  plural1stPerson: Word('арестуем', 5),
  plural2ndPerson: Word('арестуете', 5),
  plural3rdPerson: Word('арестуют', 5),
  masculinePast: Word('арестовал', 7),
  femininePast: Word('арестовала', 7),
  neuterPast: Word('арестовало', 7),
  pluralPast: Word('арестовали', 7),
  imperativeInformal: Word('арестуй', 5),
  imperativeFormal: Word('арестуйте', 5),
  imperfect: ['арестовывать'],
};

perfectVerbs.set(арестовать.name.text, арестовать);

export { арестовать };