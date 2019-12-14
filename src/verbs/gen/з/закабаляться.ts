import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закабаляться: PerfectVerb = {
  name: Word('закабаляться', 7),
  singular1stPerson: Word('закабаляюсь', 7),
  singular2ndPerson: Word('закабаляешься', 7),
  singular3rdPerson: Word('закабаляется', 7),
  plural1stPerson: Word('закабаляемся', 7),
  plural2ndPerson: Word('закабаляетесь', 7),
  plural3rdPerson: Word('закабаляются', 7),
  masculinePast: Word('закабалялся', 7),
  femininePast: Word('закабалялась', 7),
  neuterPast: Word('закабалялось', 7),
  pluralPast: Word('закабалялись', 7),
  imperativeInformal: Word('закабаляйся', 7),
  imperativeFormal: Word('закабаляйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(закабаляться.name.text, закабаляться);

export { закабаляться };