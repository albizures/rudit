import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закашляться: PerfectVerb = {
  name: Word('закашляться', 3),
  singular1stPerson: Word('закашляюсь', 3),
  singular2ndPerson: Word('закашляешься', 3),
  singular3rdPerson: Word('закашляется', 3),
  plural1stPerson: Word('закашляемся', 3),
  plural2ndPerson: Word('закашляетесь', 3),
  plural3rdPerson: Word('закашляются', 3),
  masculinePast: Word('закашлялся', 3),
  femininePast: Word('закашлялась', 3),
  neuterPast: Word('закашлялось', 3),
  pluralPast: Word('закашлялись', 3),
  imperativeInformal: Word('закашляйся', 3),
  imperativeFormal: Word('закашляйтесь', 3),
  imperfect: [],
};

perfectVerbs.set(закашляться.name.text, закашляться);

export { закашляться };