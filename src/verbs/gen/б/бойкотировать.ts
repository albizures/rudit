import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бойкотировать: PerfectVerb = {
  name: Word('бойкотировать', 6),
  singular1stPerson: Word('бойкотирую', 6),
  singular2ndPerson: Word('бойкотируешь', 6),
  singular3rdPerson: Word('бойкотирует', 6),
  plural1stPerson: Word('бойкотируем', 6),
  plural2ndPerson: Word('бойкотируете', 6),
  plural3rdPerson: Word('бойкотируют', 6),
  masculinePast: Word('бойкотировал', 6),
  femininePast: Word('бойкотировала', 6),
  neuterPast: Word('бойкотировало', 6),
  pluralPast: Word('бойкотировали', 6),
  imperativeInformal: Word('бойкотируй', 6),
  imperativeFormal: Word('бойкотируйте', 6),
  imperfect: [],
};

perfectVerbs.set(бойкотировать.name.text, бойкотировать);

export { бойкотировать };