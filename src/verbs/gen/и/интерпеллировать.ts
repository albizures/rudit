import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const интерпеллировать: PerfectVerb = {
  name: Word('интерпеллировать', 9),
  singular1stPerson: Word('интерпеллирую', 9),
  singular2ndPerson: Word('интерпеллируешь', 9),
  singular3rdPerson: Word('интерпеллирует', 9),
  plural1stPerson: Word('интерпеллируем', 9),
  plural2ndPerson: Word('интерпеллируете', 9),
  plural3rdPerson: Word('интерпеллируют', 9),
  masculinePast: Word('интерпеллировал', 9),
  femininePast: Word('интерпеллировала', 9),
  neuterPast: Word('интерпеллировало', 9),
  pluralPast: Word('интерпеллировали', 9),
  imperativeInformal: Word('интерпеллируй', 9),
  imperativeFormal: Word('интерпеллируйте', 9),
  imperfect: [],
};

perfectVerbs.set(интерпеллировать.name.text, интерпеллировать);

export { интерпеллировать };