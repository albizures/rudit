import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const цитировать: PerfectVerb = {
  name: Word('цитировать', 3),
  singular1stPerson: Word('цитирую', 3),
  singular2ndPerson: Word('цитируешь', 3),
  singular3rdPerson: Word('цитирует', 3),
  plural1stPerson: Word('цитируем', 3),
  plural2ndPerson: Word('цитируете', 3),
  plural3rdPerson: Word('цитируют', 3),
  masculinePast: Word('цитировал', 3),
  femininePast: Word('цитировала', 3),
  neuterPast: Word('цитировало', 3),
  pluralPast: Word('цитировали', 3),
  imperativeInformal: Word('цитируй', 3),
  imperativeFormal: Word('цитируйте', 3),
  imperfect: [],
};

perfectVerbs.set(цитировать.name.text, цитировать);

export { цитировать };