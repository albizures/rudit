import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const секуляризировать: PerfectVerb = {
  name: Word('секуляризировать', 9),
  singular1stPerson: Word('секуляризирую', 9),
  singular2ndPerson: Word('секуляризируешь', 9),
  singular3rdPerson: Word('секуляризирует', 9),
  plural1stPerson: Word('секуляризируем', 9),
  plural2ndPerson: Word('секуляризируете', 9),
  plural3rdPerson: Word('секуляризируют', 9),
  masculinePast: Word('секуляризировал', 9),
  femininePast: Word('секуляризировала', 9),
  neuterPast: Word('секуляризировало', 9),
  pluralPast: Word('секуляризировали', 9),
  imperativeInformal: Word('секуляризируй', 9),
  imperativeFormal: Word('секуляризируйте', 9),
  imperfect: [],
};

perfectVerbs.set(секуляризировать.name.text, секуляризировать);

export { секуляризировать };