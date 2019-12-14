import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бормотать: PerfectVerb = {
  name: Word('бормотать', 6),
  singular1stPerson: Word('бормочу', 6),
  singular2ndPerson: Word('бормочешь', 4),
  singular3rdPerson: Word('бормочет', 4),
  plural1stPerson: Word('бормочем', 4),
  plural2ndPerson: Word('бормочете', 4),
  plural3rdPerson: Word('бормочут', 4),
  masculinePast: Word('бормотал', 6),
  femininePast: Word('бормотала', 6),
  neuterPast: Word('бормотало', 6),
  pluralPast: Word('бормотали', 6),
  imperativeInformal: Word('бормочи', 6),
  imperativeFormal: Word('бормочите', 6),
  imperfect: ['[[пробормотать'],
};

perfectVerbs.set(бормотать.name.text, бормотать);

export { бормотать };