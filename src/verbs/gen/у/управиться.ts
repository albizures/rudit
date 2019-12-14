import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const управиться: PerfectVerb = {
  name: Word('управиться', 3),
  singular1stPerson: Word('управлюсь', 3),
  singular2ndPerson: Word('управишься', 3),
  singular3rdPerson: Word('управится', 3),
  plural1stPerson: Word('управимся', 3),
  plural2ndPerson: Word('управитесь', 3),
  plural3rdPerson: Word('управятся', 3),
  masculinePast: Word('управился', 3),
  femininePast: Word('управилась', 3),
  neuterPast: Word('управилось', 3),
  pluralPast: Word('управились', 3),
  imperativeInformal: Word('управься', 3),
  imperativeFormal: Word('управьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(управиться.name.text, управиться);

export { управиться };