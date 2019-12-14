import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const умаляться: PerfectVerb = {
  name: Word('умаляться', 4),
  singular1stPerson: Word('умаляюсь', 4),
  singular2ndPerson: Word('умаляешься', 4),
  singular3rdPerson: Word('умаляется', 4),
  plural1stPerson: Word('умаляемся', 4),
  plural2ndPerson: Word('умаляетесь', 4),
  plural3rdPerson: Word('умаляются', 4),
  masculinePast: Word('умалялся', 4),
  femininePast: Word('умалялась', 4),
  neuterPast: Word('умалялось', 4),
  pluralPast: Word('умалялись', 4),
  imperativeInformal: Word('умаляйся', 4),
  imperativeFormal: Word('умаляйтесь', 4),
  imperfect: [],
};

perfectVerbs.set(умаляться.name.text, умаляться);

export { умаляться };