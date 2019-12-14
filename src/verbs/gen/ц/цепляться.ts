import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const цепляться: PerfectVerb = {
  name: Word('цепляться', 4),
  singular1stPerson: Word('цепляюсь', 4),
  singular2ndPerson: Word('цепляешься', 4),
  singular3rdPerson: Word('цепляется', 4),
  plural1stPerson: Word('цепляемся', 4),
  plural2ndPerson: Word('цепляетесь', 4),
  plural3rdPerson: Word('цепляются', 4),
  masculinePast: Word('цеплялся', 4),
  femininePast: Word('цеплялась', 4),
  neuterPast: Word('цеплялось', 4),
  pluralPast: Word('цеплялись', 4),
  imperativeInformal: Word('цепляйся', 4),
  imperativeFormal: Word('цепляйтесь', 4),
  imperfect: [],
};

perfectVerbs.set(цепляться.name.text, цепляться);

export { цепляться };