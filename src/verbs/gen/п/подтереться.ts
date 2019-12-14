import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подтереться: PerfectVerb = {
  name: Word('подтереться', 6),
  singular1stPerson: Word('подотрусь', 6),
  singular2ndPerson: Word('подотрёшься', 1),
  singular3rdPerson: Word('подотрётся', 1),
  plural1stPerson: Word('подотрёмся', 1),
  plural2ndPerson: Word('подотрётесь', 8),
  plural3rdPerson: Word('подотрутся', 6),
  masculinePast: Word('подтёрся', 1),
  femininePast: Word('подтёрлась', 7),
  neuterPast: Word('подтёрлось', 1),
  pluralPast: Word('подтёрлись', 7),
  imperativeInformal: Word('подотрись', 6),
  imperativeFormal: Word('подотритесь', 6),
  imperfect: [],
};

perfectVerbs.set(подтереться.name.text, подтереться);

export { подтереться };