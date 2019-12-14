import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ораторствовать: PerfectVerb = {
  name: Word('ораторствовать', 2),
  singular1stPerson: Word('ораторствую', 2),
  singular2ndPerson: Word('ораторствуешь', 2),
  singular3rdPerson: Word('ораторствует', 2),
  plural1stPerson: Word('ораторствуем', 2),
  plural2ndPerson: Word('ораторствуете', 2),
  plural3rdPerson: Word('ораторствуют', 2),
  masculinePast: Word('ораторствовал', 2),
  femininePast: Word('ораторствовала', 2),
  neuterPast: Word('ораторствовало', 2),
  pluralPast: Word('ораторствовали', 2),
  imperativeInformal: Word('ораторствуй', 2),
  imperativeFormal: Word('ораторствуйте', 2),
  imperfect: [],
};

perfectVerbs.set(ораторствовать.name.text, ораторствовать);

export { ораторствовать };