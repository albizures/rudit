import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потоптать: PerfectVerb = {
  name: Word('потоптать', 6),
  singular1stPerson: Word('потопчу', 6),
  singular2ndPerson: Word('потопчешь', 3),
  singular3rdPerson: Word('потопчет', 3),
  plural1stPerson: Word('потопчем', 3),
  plural2ndPerson: Word('потопчете', 3),
  plural3rdPerson: Word('потопчут', 3),
  masculinePast: Word('потоптал', 6),
  femininePast: Word('потоптала', 6),
  neuterPast: Word('потоптало', 6),
  pluralPast: Word('потоптали', 6),
  imperativeInformal: Word('потопчи', 6),
  imperativeFormal: Word('потопчите', 6),
  imperfect: [],
};

perfectVerbs.set(потоптать.name.text, потоптать);

export { потоптать };