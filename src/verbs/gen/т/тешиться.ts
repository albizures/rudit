import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тешиться: PerfectVerb = {
  name: Word('тешиться', 1),
  singular1stPerson: Word('тешусь', 1),
  singular2ndPerson: Word('тешишься', 1),
  singular3rdPerson: Word('тешится', 1),
  plural1stPerson: Word('тешимся', 1),
  plural2ndPerson: Word('тешитесь', 1),
  plural3rdPerson: Word('тешатся', 1),
  masculinePast: Word('тешился', 1),
  femininePast: Word('тешилась', 1),
  neuterPast: Word('тешилось', 1),
  pluralPast: Word('тешились', 1),
  imperativeInformal: Word('тешься', 1),
  imperativeFormal: Word('тешьтесь', 1),
  imperfect: [],
};

perfectVerbs.set(тешиться.name.text, тешиться);

export { тешиться };