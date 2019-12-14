import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закругляться: PerfectVerb = {
  name: Word('закругляться', 7),
  singular1stPerson: Word('закругляюсь', 7),
  singular2ndPerson: Word('закругляешься', 7),
  singular3rdPerson: Word('закругляется', 7),
  plural1stPerson: Word('закругляемся', 7),
  plural2ndPerson: Word('закругляетесь', 7),
  plural3rdPerson: Word('закругляются', 7),
  masculinePast: Word('закруглялся', 7),
  femininePast: Word('закруглялась', 7),
  neuterPast: Word('закруглялось', 7),
  pluralPast: Word('закруглялись', 7),
  imperativeInformal: Word('закругляйся', 7),
  imperativeFormal: Word('закругляйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(закругляться.name.text, закругляться);

export { закругляться };