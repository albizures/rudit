import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потупляться: PerfectVerb = {
  name: Word('потупляться', 6),
  singular1stPerson: Word('потупляюсь', 6),
  singular2ndPerson: Word('потупляешься', 6),
  singular3rdPerson: Word('потупляется', 6),
  plural1stPerson: Word('потупляемся', 6),
  plural2ndPerson: Word('потупляетесь', 6),
  plural3rdPerson: Word('потупляются', 6),
  masculinePast: Word('потуплялся', 6),
  femininePast: Word('потуплялась', 6),
  neuterPast: Word('потуплялось', 6),
  pluralPast: Word('потуплялись', 6),
  imperativeInformal: Word('потупляйся', 6),
  imperativeFormal: Word('потупляйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(потупляться.name.text, потупляться);

export { потупляться };