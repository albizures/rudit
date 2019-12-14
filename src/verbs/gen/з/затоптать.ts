import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затоптать: PerfectVerb = {
  name: Word('затоптать', 6),
  singular1stPerson: Word('затопчу', 6),
  singular2ndPerson: Word('затопчешь', 3),
  singular3rdPerson: Word('затопчет', 3),
  plural1stPerson: Word('затопчем', 3),
  plural2ndPerson: Word('затопчете', 3),
  plural3rdPerson: Word('затопчут', 3),
  masculinePast: Word('затоптал', 6),
  femininePast: Word('затоптала', 6),
  neuterPast: Word('затоптало', 6),
  pluralPast: Word('затоптали', 6),
  imperativeInformal: Word('затопчи', 6),
  imperativeFormal: Word('затопчите', 6),
  imperfect: [],
};

perfectVerbs.set(затоптать.name.text, затоптать);

export { затоптать };