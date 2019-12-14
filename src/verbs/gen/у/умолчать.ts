import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const умолчать: PerfectVerb = {
  name: Word('умолчать', 5),
  singular1stPerson: Word('умолчу', 5),
  singular2ndPerson: Word('умолчишь', 5),
  singular3rdPerson: Word('умолчит', 5),
  plural1stPerson: Word('умолчим', 5),
  plural2ndPerson: Word('умолчите', 5),
  plural3rdPerson: Word('умолчат', 5),
  masculinePast: Word('умолчал', 5),
  femininePast: Word('умолчала', 5),
  neuterPast: Word('умолчало', 5),
  pluralPast: Word('умолчали', 5),
  imperativeInformal: Word('умолчи', 5),
  imperativeFormal: Word('умолчите', 5),
  imperfect: [],
};

perfectVerbs.set(умолчать.name.text, умолчать);

export { умолчать };