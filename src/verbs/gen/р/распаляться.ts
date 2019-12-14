import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распаляться: PerfectVerb = {
  name: Word('распаляться', 6),
  singular1stPerson: Word('распаляюсь', 6),
  singular2ndPerson: Word('распаляешься', 6),
  singular3rdPerson: Word('распаляется', 6),
  plural1stPerson: Word('распаляемся', 6),
  plural2ndPerson: Word('распаляетесь', 6),
  plural3rdPerson: Word('распаляются', 6),
  masculinePast: Word('распалялся', 6),
  femininePast: Word('распалялась', 6),
  neuterPast: Word('распалялось', 6),
  pluralPast: Word('распалялись', 6),
  imperativeInformal: Word('распаляйся', 6),
  imperativeFormal: Word('распаляйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(распаляться.name.text, распаляться);

export { распаляться };