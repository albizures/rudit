import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const избавляться: PerfectVerb = {
  name: Word('избавляться', 6),
  singular1stPerson: Word('избавляюсь', 6),
  singular2ndPerson: Word('избавляешься', 6),
  singular3rdPerson: Word('избавляется', 6),
  plural1stPerson: Word('избавляемся', 6),
  plural2ndPerson: Word('избавляетесь', 6),
  plural3rdPerson: Word('избавляются', 6),
  masculinePast: Word('избавлялся', 6),
  femininePast: Word('избавлялась', 6),
  neuterPast: Word('избавлялось', 6),
  pluralPast: Word('избавлялись', 6),
  imperativeInformal: Word('избавляйся', 6),
  imperativeFormal: Word('избавляйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(избавляться.name.text, избавляться);

export { избавляться };