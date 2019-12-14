import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const урчать: PerfectVerb = {
  name: Word('урчать', 3),
  singular1stPerson: Word('урчу', 3),
  singular2ndPerson: Word('урчишь', 3),
  singular3rdPerson: Word('урчит', 3),
  plural1stPerson: Word('урчим', 3),
  plural2ndPerson: Word('урчите', 3),
  plural3rdPerson: Word('урчат', 3),
  masculinePast: Word('урчал', 3),
  femininePast: Word('урчала', 3),
  neuterPast: Word('урчало', 3),
  pluralPast: Word('урчали', 3),
  imperativeInformal: Word('урчи', 3),
  imperativeFormal: Word('урчите', 3),
  imperfect: [],
};

perfectVerbs.set(урчать.name.text, урчать);

export { урчать };