import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вытоптать: PerfectVerb = {
  name: Word('вытоптать', 1),
  singular1stPerson: Word('вытопчу', 1),
  singular2ndPerson: Word('вытопчешь', 1),
  singular3rdPerson: Word('вытопчет', 1),
  plural1stPerson: Word('вытопчем', 1),
  plural2ndPerson: Word('вытопчете', 1),
  plural3rdPerson: Word('вытопчут', 1),
  masculinePast: Word('вытоптал', 1),
  femininePast: Word('вытоптала', 1),
  neuterPast: Word('вытоптало', 1),
  pluralPast: Word('вытоптали', 1),
  imperativeInformal: Word('вытопчи', 1),
  imperativeFormal: Word('вытопчите', 1),
  imperfect: [],
};

perfectVerbs.set(вытоптать.name.text, вытоптать);

export { вытоптать };