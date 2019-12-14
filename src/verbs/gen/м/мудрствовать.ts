import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мудрствовать: PerfectVerb = {
  name: Word('мудрствовать', 1),
  singular1stPerson: Word('мудрствую', 1),
  singular2ndPerson: Word('мудрствуешь', 1),
  singular3rdPerson: Word('мудрствует', 1),
  plural1stPerson: Word('мудрствуем', 1),
  plural2ndPerson: Word('мудрствуете', 1),
  plural3rdPerson: Word('мудрствуют', 1),
  masculinePast: Word('мудрствовал', 1),
  femininePast: Word('мудрствовала', 1),
  neuterPast: Word('мудрствовало', 1),
  pluralPast: Word('мудрствовали', 1),
  imperativeInformal: Word('мудрствуй', 1),
  imperativeFormal: Word('мудрствуйте', 1),
  imperfect: [],
};

perfectVerbs.set(мудрствовать.name.text, мудрствовать);

export { мудрствовать };