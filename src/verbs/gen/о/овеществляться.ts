import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const овеществляться: PerfectVerb = {
  name: Word('овеществляться', 9),
  singular1stPerson: Word('овеществляюсь', 9),
  singular2ndPerson: Word('овеществляешься', 9),
  singular3rdPerson: Word('овеществляется', 9),
  plural1stPerson: Word('овеществляемся', 9),
  plural2ndPerson: Word('овеществляетесь', 9),
  plural3rdPerson: Word('овеществляются', 9),
  masculinePast: Word('овеществлялся', 9),
  femininePast: Word('овеществлялась', 9),
  neuterPast: Word('овеществлялось', 9),
  pluralPast: Word('овеществлялись', 9),
  imperativeInformal: Word('овеществляйся', 9),
  imperativeFormal: Word('овеществляйтесь', 9),
  imperfect: [],
};

perfectVerbs.set(овеществляться.name.text, овеществляться);

export { овеществляться };