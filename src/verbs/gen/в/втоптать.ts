import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const втоптать: PerfectVerb = {
  name: Word('втоптать', 5),
  singular1stPerson: Word('втопчу', 5),
  singular2ndPerson: Word('втопчешь', 2),
  singular3rdPerson: Word('втопчет', 2),
  plural1stPerson: Word('втопчем', 2),
  plural2ndPerson: Word('втопчете', 2),
  plural3rdPerson: Word('втопчут', 2),
  masculinePast: Word('втоптал', 5),
  femininePast: Word('втоптала', 5),
  neuterPast: Word('втоптало', 5),
  pluralPast: Word('втоптали', 5),
  imperativeInformal: Word('втопчи', 5),
  imperativeFormal: Word('втопчите', 5),
  imperfect: [],
};

perfectVerbs.set(втоптать.name.text, втоптать);

export { втоптать };