import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утомляться: PerfectVerb = {
  name: Word('утомляться', 5),
  singular1stPerson: Word('утомляюсь', 5),
  singular2ndPerson: Word('утомляешься', 5),
  singular3rdPerson: Word('утомляется', 5),
  plural1stPerson: Word('утомляемся', 5),
  plural2ndPerson: Word('утомляетесь', 5),
  plural3rdPerson: Word('утомляются', 5),
  masculinePast: Word('утомлялся', 5),
  femininePast: Word('утомлялась', 5),
  neuterPast: Word('утомлялось', 5),
  pluralPast: Word('утомлялись', 5),
  imperativeInformal: Word('утомляйся', 5),
  imperativeFormal: Word('утомляйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(утомляться.name.text, утомляться);

export { утомляться };