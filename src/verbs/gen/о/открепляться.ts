import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const открепляться: PerfectVerb = {
  name: Word('открепляться', 7),
  singular1stPerson: Word('открепляюсь', 7),
  singular2ndPerson: Word('открепляешься', 7),
  singular3rdPerson: Word('открепляется', 7),
  plural1stPerson: Word('открепляемся', 7),
  plural2ndPerson: Word('открепляетесь', 7),
  plural3rdPerson: Word('открепляются', 7),
  masculinePast: Word('откреплялся', 7),
  femininePast: Word('откреплялась', 7),
  neuterPast: Word('откреплялось', 7),
  pluralPast: Word('откреплялись', 7),
  imperativeInformal: Word('открепляйся', 7),
  imperativeFormal: Word('открепляйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(открепляться.name.text, открепляться);

export { открепляться };