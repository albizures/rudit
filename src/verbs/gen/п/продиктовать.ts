import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const продиктовать: PerfectVerb = {
  name: Word('продиктовать', 9),
  singular1stPerson: Word('продиктую', 7),
  singular2ndPerson: Word('продиктуешь', 7),
  singular3rdPerson: Word('продиктует', 7),
  plural1stPerson: Word('продиктуем', 7),
  plural2ndPerson: Word('продиктуете', 7),
  plural3rdPerson: Word('продиктуют', 7),
  masculinePast: Word('продиктовал', 9),
  femininePast: Word('продиктовала', 9),
  neuterPast: Word('продиктовало', 9),
  pluralPast: Word('продиктовали', 9),
  imperativeInformal: Word('продиктуй', 7),
  imperativeFormal: Word('продиктуйте', 7),
  imperfect: [],
};

perfectVerbs.set(продиктовать.name.text, продиктовать);

export { продиктовать };