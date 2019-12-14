import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изготовляться: PerfectVerb = {
  name: Word('изготовляться', 8),
  singular1stPerson: Word('изготовляюсь', 8),
  singular2ndPerson: Word('изготовляешься', 8),
  singular3rdPerson: Word('изготовляется', 8),
  plural1stPerson: Word('изготовляемся', 8),
  plural2ndPerson: Word('изготовляетесь', 8),
  plural3rdPerson: Word('изготовляются', 8),
  masculinePast: Word('изготовлялся', 8),
  femininePast: Word('изготовлялась', 8),
  neuterPast: Word('изготовлялось', 8),
  pluralPast: Word('изготовлялись', 8),
  imperativeInformal: Word('изготовляйся', 8),
  imperativeFormal: Word('изготовляйтесь', 8),
  imperfect: [],
};

perfectVerbs.set(изготовляться.name.text, изготовляться);

export { изготовляться };