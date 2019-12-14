import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расщепляться: PerfectVerb = {
  name: Word('расщепляться', 7),
  singular1stPerson: Word('расщепляюсь', 7),
  singular2ndPerson: Word('расщепляешься', 7),
  singular3rdPerson: Word('расщепляется', 7),
  plural1stPerson: Word('расщепляемся', 7),
  plural2ndPerson: Word('расщепляетесь', 7),
  plural3rdPerson: Word('расщепляются', 7),
  masculinePast: Word('расщеплялся', 7),
  femininePast: Word('расщеплялась', 7),
  neuterPast: Word('расщеплялось', 7),
  pluralPast: Word('расщеплялись', 7),
  imperativeInformal: Word('расщепляйся', 7),
  imperativeFormal: Word('расщепляйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(расщепляться.name.text, расщепляться);

export { расщепляться };