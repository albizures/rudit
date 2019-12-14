import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бронзировать: PerfectVerb = {
  name: Word('бронзировать', 9),
  singular1stPerson: Word('бронзирую', 7),
  singular2ndPerson: Word('бронзируешь', 7),
  singular3rdPerson: Word('бронзирует', 7),
  plural1stPerson: Word('бронзируем', 7),
  plural2ndPerson: Word('бронзируете', 7),
  plural3rdPerson: Word('бронзируют', 7),
  masculinePast: Word('бронзировал', 9),
  femininePast: Word('бронзировала', 9),
  neuterPast: Word('бронзировало', 9),
  pluralPast: Word('бронзировали', 9),
  imperativeInformal: Word('бронзируй', 7),
  imperativeFormal: Word('бронзируйте', 7),
  imperfect: [],
};

perfectVerbs.set(бронзировать.name.text, бронзировать);

export { бронзировать };