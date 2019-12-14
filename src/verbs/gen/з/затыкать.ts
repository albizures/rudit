import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затыкать: PerfectVerb = {
  name: Word('затыкать', 3),
  singular1stPerson: Word('затычу', 3),
  singular2ndPerson: Word('затычешь', 3),
  singular3rdPerson: Word('затычет', 3),
  plural1stPerson: Word('затычем', 3),
  plural2ndPerson: Word('затычете', 3),
  plural3rdPerson: Word('затычут', 3),
  masculinePast: Word('затыкал', 3),
  femininePast: Word('затыкала', 3),
  neuterPast: Word('затыкало', 3),
  pluralPast: Word('затыкали', 3),
  imperativeInformal: Word('затычь', 3),
  imperativeFormal: Word('затычьте', 3),
  imperfect: [],
};

perfectVerbs.set(затыкать.name.text, затыкать);

export { затыкать };