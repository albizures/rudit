import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тратиться: PerfectVerb = {
  name: Word('тратиться', 2),
  singular1stPerson: Word('трачусь', 2),
  singular2ndPerson: Word('тратишься', 2),
  singular3rdPerson: Word('тратится', 2),
  plural1stPerson: Word('тратимся', 2),
  plural2ndPerson: Word('тратитесь', 2),
  plural3rdPerson: Word('тратятся', 2),
  masculinePast: Word('тратился', 2),
  femininePast: Word('тратилась', 2),
  neuterPast: Word('тратилось', 2),
  pluralPast: Word('тратились', 2),
  imperativeInformal: Word('траться', 2),
  imperativeFormal: Word('тратьтесь', 2),
  imperfect: [],
};

perfectVerbs.set(тратиться.name.text, тратиться);

export { тратиться };