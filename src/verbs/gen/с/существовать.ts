import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const существовать: PerfectVerb = {
  name: Word('существовать', 9),
  singular1stPerson: Word('существую', 7),
  singular2ndPerson: Word('существуешь', 7),
  singular3rdPerson: Word('существует', 7),
  plural1stPerson: Word('существуем', 7),
  plural2ndPerson: Word('существуете', 7),
  plural3rdPerson: Word('существуют', 7),
  masculinePast: Word('существовал', 9),
  femininePast: Word('существовала', 9),
  neuterPast: Word('существовало', 9),
  pluralPast: Word('существовали', 9),
  imperativeInformal: Word('существуй', 7),
  imperativeFormal: Word('существуйте', 7),
  imperfect: ['просуществовать'],
};

perfectVerbs.set(существовать.name.text, существовать);

export { существовать };