import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сцепляться: PerfectVerb = {
  name: Word('сцепляться', 5),
  singular1stPerson: Word('сцепляюсь', 5),
  singular2ndPerson: Word('сцепляешься', 5),
  singular3rdPerson: Word('сцепляется', 5),
  plural1stPerson: Word('сцепляемся', 5),
  plural2ndPerson: Word('сцепляетесь', 5),
  plural3rdPerson: Word('сцепляются', 5),
  masculinePast: Word('сцеплялся', 5),
  femininePast: Word('сцеплялась', 5),
  neuterPast: Word('сцеплялось', 5),
  pluralPast: Word('сцеплялись', 5),
  imperativeInformal: Word('сцепляйся', 5),
  imperativeFormal: Word('сцепляйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(сцепляться.name.text, сцепляться);

export { сцепляться };