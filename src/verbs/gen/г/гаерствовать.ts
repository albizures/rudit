import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const гаерствовать: PerfectVerb = {
  name: Word('гаерствовать', 1),
  singular1stPerson: Word('гаерствую', 1),
  singular2ndPerson: Word('гаерствуешь', 1),
  singular3rdPerson: Word('гаерствует', 1),
  plural1stPerson: Word('гаерствуем', 1),
  plural2ndPerson: Word('гаерствуете', 1),
  plural3rdPerson: Word('гаерствуют', 1),
  masculinePast: Word('гаерствовал', 1),
  femininePast: Word('гаерствовала', 1),
  neuterPast: Word('гаерствовало', 1),
  pluralPast: Word('гаерствовали', 1),
  imperativeInformal: Word('гаерствуй', 1),
  imperativeFormal: Word('гаерствуйте', 1),
  imperfect: [],
};

perfectVerbs.set(гаерствовать.name.text, гаерствовать);

export { гаерствовать };