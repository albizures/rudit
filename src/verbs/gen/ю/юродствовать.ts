import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const юродствовать: PerfectVerb = {
  name: Word('юродствовать', 2),
  singular1stPerson: Word('юродствую', 2),
  singular2ndPerson: Word('юродствуешь', 2),
  singular3rdPerson: Word('юродствует', 2),
  plural1stPerson: Word('юродствуем', 2),
  plural2ndPerson: Word('юродствуете', 2),
  plural3rdPerson: Word('юродствуют', 2),
  masculinePast: Word('юродствовал', 2),
  femininePast: Word('юродствовала', 2),
  neuterPast: Word('юродствовало', 2),
  pluralPast: Word('юродствовали', 2),
  imperativeInformal: Word('юродствуй', 2),
  imperativeFormal: Word('юродствуйте', 2),
  imperfect: [],
};

perfectVerbs.set(юродствовать.name.text, юродствовать);

export { юродствовать };