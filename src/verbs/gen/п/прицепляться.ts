import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прицепляться: PerfectVerb = {
  name: Word('прицепляться', 7),
  singular1stPerson: Word('прицепляюсь', 7),
  singular2ndPerson: Word('прицепляешься', 7),
  singular3rdPerson: Word('прицепляется', 7),
  plural1stPerson: Word('прицепляемся', 7),
  plural2ndPerson: Word('прицепляетесь', 7),
  plural3rdPerson: Word('прицепляются', 7),
  masculinePast: Word('прицеплялся', 7),
  femininePast: Word('прицеплялась', 7),
  neuterPast: Word('прицеплялось', 7),
  pluralPast: Word('прицеплялись', 7),
  imperativeInformal: Word('прицепляйся', 7),
  imperativeFormal: Word('прицепляйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(прицепляться.name.text, прицепляться);

export { прицепляться };