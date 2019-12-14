import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подтереться: PerfectVerb = {
  name: Word('подтереться', 6),
  singular1stPerson: Word('подотрусь', 6),
  singular2ndPerson: Word('подотрёшься', 6),
  singular3rdPerson: Word('подотрётся', 6),
  plural1stPerson: Word('подотрёмся', 6),
  plural2ndPerson: Word('подотрётесь', 6),
  plural3rdPerson: Word('подотрутся', 6),
  masculinePast: Word('подтёрся', 4),
  femininePast: Word('подтёрлась', 4),
  neuterPast: Word('подтёрлось', 4),
  pluralPast: Word('подтёрлись', 4),
  imperativeInformal: Word('подотрись', 6),
  imperativeFormal: Word('подотритесь', 6),
  imperfect: [],
};

perfectVerbs.set(подтереться.name.text, подтереться);

export { подтереться };