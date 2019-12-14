import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const умчать: PerfectVerb = {
  name: Word('умчать', 3),
  singular1stPerson: Word('умчу', 3),
  singular2ndPerson: Word('умчишь', 3),
  singular3rdPerson: Word('умчит', 3),
  plural1stPerson: Word('умчим', 3),
  plural2ndPerson: Word('умчите', 3),
  plural3rdPerson: Word('умчат', 3),
  masculinePast: Word('умчал', 3),
  femininePast: Word('умчала', 3),
  neuterPast: Word('умчало', 3),
  pluralPast: Word('умчали', 3),
  imperativeInformal: Word('умчи', 3),
  imperativeFormal: Word('умчите', 3),
  imperfect: [],
};

perfectVerbs.set(умчать.name.text, умчать);

export { умчать };