import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закаляться: PerfectVerb = {
  name: Word('закаляться', 5),
  singular1stPerson: Word('закаляюсь', 5),
  singular2ndPerson: Word('закаляешься', 5),
  singular3rdPerson: Word('закаляется', 5),
  plural1stPerson: Word('закаляемся', 5),
  plural2ndPerson: Word('закаляетесь', 5),
  plural3rdPerson: Word('закаляются', 5),
  masculinePast: Word('закалялся', 5),
  femininePast: Word('закалялась', 5),
  neuterPast: Word('закалялось', 5),
  pluralPast: Word('закалялись', 5),
  imperativeInformal: Word('закаляйся', 5),
  imperativeFormal: Word('закаляйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(закаляться.name.text, закаляться);

export { закаляться };