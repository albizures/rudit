import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const посрамляться: PerfectVerb = {
  name: Word('посрамляться', 7),
  singular1stPerson: Word('посрамляюсь', 7),
  singular2ndPerson: Word('посрамляешься', 7),
  singular3rdPerson: Word('посрамляется', 7),
  plural1stPerson: Word('посрамляемся', 7),
  plural2ndPerson: Word('посрамляетесь', 7),
  plural3rdPerson: Word('посрамляются', 7),
  masculinePast: Word('посрамлялся', 7),
  femininePast: Word('посрамлялась', 7),
  neuterPast: Word('посрамлялось', 7),
  pluralPast: Word('посрамлялись', 7),
  imperativeInformal: Word('посрамляйся', 7),
  imperativeFormal: Word('посрамляйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(посрамляться.name.text, посрамляться);

export { посрамляться };