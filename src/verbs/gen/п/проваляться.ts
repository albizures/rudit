import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проваляться: PerfectVerb = {
  name: Word('проваляться', 6),
  singular1stPerson: Word('проваляюсь', 6),
  singular2ndPerson: Word('проваляешься', 6),
  singular3rdPerson: Word('проваляется', 6),
  plural1stPerson: Word('проваляемся', 6),
  plural2ndPerson: Word('проваляетесь', 6),
  plural3rdPerson: Word('проваляются', 6),
  masculinePast: Word('провалялся', 6),
  femininePast: Word('провалялась', 6),
  neuterPast: Word('провалялось', 6),
  pluralPast: Word('провалялись', 6),
  imperativeInformal: Word('проваляйся', 6),
  imperativeFormal: Word('проваляйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(проваляться.name.text, проваляться);

export { проваляться };