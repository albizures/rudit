import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стонать: PerfectVerb = {
  name: Word('стонать', 4),
  singular1stPerson: Word('стону', 4),
  singular2ndPerson: Word('стонешь', 2),
  singular3rdPerson: Word('стонет', 2),
  plural1stPerson: Word('стонем', 2),
  plural2ndPerson: Word('стонете', 2),
  plural3rdPerson: Word('стонут', 2),
  masculinePast: Word('стонал', 4),
  femininePast: Word('стонала', 4),
  neuterPast: Word('стонало', 4),
  pluralPast: Word('стонали', 4),
  imperativeInformal: Word('стони', 4),
  imperativeFormal: Word('стоните', 4),
  imperfect: [],
};

perfectVerbs.set(стонать.name.text, стонать);

export { стонать };