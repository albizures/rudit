import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const колонизовать: PerfectVerb = {
  name: Word('колонизовать', 9),
  singular1stPerson: Word('колонизую', 7),
  singular2ndPerson: Word('колонизуешь', 7),
  singular3rdPerson: Word('колонизует', 7),
  plural1stPerson: Word('колонизуем', 7),
  plural2ndPerson: Word('колонизуете', 7),
  plural3rdPerson: Word('колонизуют', 7),
  masculinePast: Word('колонизовал', 9),
  femininePast: Word('колонизовала', 9),
  neuterPast: Word('колонизовало', 9),
  pluralPast: Word('колонизовали', 9),
  imperativeInformal: Word('колонизуй', 7),
  imperativeFormal: Word('колонизуйте', 7),
  imperfect: [],
};

perfectVerbs.set(колонизовать.name.text, колонизовать);

export { колонизовать };