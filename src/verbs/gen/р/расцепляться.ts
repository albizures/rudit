import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расцепляться: PerfectVerb = {
  name: Word('расцепляться', 7),
  singular1stPerson: Word('расцепляюсь', 7),
  singular2ndPerson: Word('расцепляешься', 7),
  singular3rdPerson: Word('расцепляется', 7),
  plural1stPerson: Word('расцепляемся', 7),
  plural2ndPerson: Word('расцепляетесь', 7),
  plural3rdPerson: Word('расцепляются', 7),
  masculinePast: Word('расцеплялся', 7),
  femininePast: Word('расцеплялась', 7),
  neuterPast: Word('расцеплялось', 7),
  pluralPast: Word('расцеплялись', 7),
  imperativeInformal: Word('расцепляйся', 7),
  imperativeFormal: Word('расцепляйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(расцепляться.name.text, расцепляться);

export { расцепляться };