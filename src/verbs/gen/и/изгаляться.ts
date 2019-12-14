import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изгаляться: PerfectVerb = {
  name: Word('изгаляться', 5),
  singular1stPerson: Word('изгаляюсь', 5),
  singular2ndPerson: Word('изгаляешься', 5),
  singular3rdPerson: Word('изгаляется', 5),
  plural1stPerson: Word('изгаляемся', 5),
  plural2ndPerson: Word('изгаляетесь', 5),
  plural3rdPerson: Word('изгаляются', 5),
  masculinePast: Word('изгалялся', 5),
  femininePast: Word('изгалялась', 5),
  neuterPast: Word('изгалялось', 5),
  pluralPast: Word('изгалялись', 5),
  imperativeInformal: Word('изгаляйся', 5),
  imperativeFormal: Word('изгаляйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(изгаляться.name.text, изгаляться);

export { изгаляться };