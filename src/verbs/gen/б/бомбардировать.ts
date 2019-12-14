import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бомбардировать: PerfectVerb = {
  name: Word('бомбардировать', 11),
  singular1stPerson: Word('бомбардирую', 9),
  singular2ndPerson: Word('бомбардируешь', 9),
  singular3rdPerson: Word('бомбардирует', 9),
  plural1stPerson: Word('бомбардируем', 9),
  plural2ndPerson: Word('бомбардируете', 9),
  plural3rdPerson: Word('бомбардируют', 9),
  masculinePast: Word('бомбардировал', 11),
  femininePast: Word('бомбардировала', 11),
  neuterPast: Word('бомбардировало', 11),
  pluralPast: Word('бомбардировали', 11),
  imperativeInformal: Word('бомбардируй', 9),
  imperativeFormal: Word('бомбардируйте', 9),
  imperfect: [],
};

perfectVerbs.set(бомбардировать.name.text, бомбардировать);

export { бомбардировать };