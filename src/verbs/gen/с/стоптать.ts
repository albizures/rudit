import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стоптать: PerfectVerb = {
  name: Word('стоптать', 5),
  singular1stPerson: Word('стопчу', 5),
  singular2ndPerson: Word('стопчешь', 2),
  singular3rdPerson: Word('стопчет', 2),
  plural1stPerson: Word('стопчем', 2),
  plural2ndPerson: Word('стопчете', 2),
  plural3rdPerson: Word('стопчут', 2),
  masculinePast: Word('стоптал', 5),
  femininePast: Word('стоптала', 5),
  neuterPast: Word('стоптало', 5),
  pluralPast: Word('стоптали', 5),
  imperativeInformal: Word('стопчи', 5),
  imperativeFormal: Word('стопчите', 5),
  imperfect: [],
};

perfectVerbs.set(стоптать.name.text, стоптать);

export { стоптать };