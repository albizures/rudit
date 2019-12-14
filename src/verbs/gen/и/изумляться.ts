import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изумляться: PerfectVerb = {
  name: Word('изумляться', 5),
  singular1stPerson: Word('изумляюсь', 5),
  singular2ndPerson: Word('изумляешься', 5),
  singular3rdPerson: Word('изумляется', 5),
  plural1stPerson: Word('изумляемся', 5),
  plural2ndPerson: Word('изумляетесь', 5),
  plural3rdPerson: Word('изумляются', 5),
  masculinePast: Word('изумлялся', 5),
  femininePast: Word('изумлялась', 5),
  neuterPast: Word('изумлялось', 5),
  pluralPast: Word('изумлялись', 5),
  imperativeInformal: Word('изумляйся', 5),
  imperativeFormal: Word('изумляйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(изумляться.name.text, изумляться);

export { изумляться };