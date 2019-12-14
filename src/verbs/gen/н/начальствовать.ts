import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const начальствовать: PerfectVerb = {
  name: Word('начальствовать', 3),
  singular1stPerson: Word('начальствую', 3),
  singular2ndPerson: Word('начальствуешь', 3),
  singular3rdPerson: Word('начальствует', 3),
  plural1stPerson: Word('начальствуем', 3),
  plural2ndPerson: Word('начальствуете', 3),
  plural3rdPerson: Word('начальствуют', 3),
  masculinePast: Word('начальствовал', 3),
  femininePast: Word('начальствовала', 3),
  neuterPast: Word('начальствовало', 3),
  pluralPast: Word('начальствовали', 3),
  imperativeInformal: Word('начальствуй', 3),
  imperativeFormal: Word('начальствуйте', 3),
  imperfect: [],
};

perfectVerbs.set(начальствовать.name.text, начальствовать);

export { начальствовать };