import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бренчать: PerfectVerb = {
  name: Word('бренчать', 5),
  singular1stPerson: Word('бренчу', 5),
  singular2ndPerson: Word('бренчишь', 5),
  singular3rdPerson: Word('бренчит', 5),
  plural1stPerson: Word('бренчим', 5),
  plural2ndPerson: Word('бренчите', 5),
  plural3rdPerson: Word('бренчат', 5),
  masculinePast: Word('бренчал', 5),
  femininePast: Word('бренчала', 5),
  neuterPast: Word('бренчало', 5),
  pluralPast: Word('бренчали', 5),
  imperativeInformal: Word('бренчи', 5),
  imperativeFormal: Word('бренчите', 5),
  imperfect: [],
};

perfectVerbs.set(бренчать.name.text, бренчать);

export { бренчать };