import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const истоптать: PerfectVerb = {
  name: Word('истоптать', 6),
  singular1stPerson: Word('истопчу', 6),
  singular2ndPerson: Word('истопчешь', 3),
  singular3rdPerson: Word('истопчет', 3),
  plural1stPerson: Word('истопчем', 3),
  plural2ndPerson: Word('истопчете', 3),
  plural3rdPerson: Word('истопчут', 3),
  masculinePast: Word('истоптал', 6),
  femininePast: Word('истоптала', 6),
  neuterPast: Word('истоптало', 6),
  pluralPast: Word('истоптали', 6),
  imperativeInformal: Word('истопчи', 6),
  imperativeFormal: Word('истопчите', 6),
  imperfect: [],
};

perfectVerbs.set(истоптать.name.text, истоптать);

export { истоптать };