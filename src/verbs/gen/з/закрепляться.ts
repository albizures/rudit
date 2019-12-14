import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закрепляться: PerfectVerb = {
  name: Word('закрепляться', 7),
  singular1stPerson: Word('закрепляюсь', 7),
  singular2ndPerson: Word('закрепляешься', 7),
  singular3rdPerson: Word('закрепляется', 7),
  plural1stPerson: Word('закрепляемся', 7),
  plural2ndPerson: Word('закрепляетесь', 7),
  plural3rdPerson: Word('закрепляются', 7),
  masculinePast: Word('закреплялся', 7),
  femininePast: Word('закреплялась', 7),
  neuterPast: Word('закреплялось', 7),
  pluralPast: Word('закреплялись', 7),
  imperativeInformal: Word('закрепляйся', 7),
  imperativeFormal: Word('закрепляйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(закрепляться.name.text, закрепляться);

export { закрепляться };