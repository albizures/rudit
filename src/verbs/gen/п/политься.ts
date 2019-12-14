import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const политься: PerfectVerb = {
  name: Word('политься', 3),
  singular1stPerson: Word('польюсь', 4),
  singular2ndPerson: Word('польёшься', 4),
  singular3rdPerson: Word('польётся', 4),
  plural1stPerson: Word('польёмся', 4),
  plural2ndPerson: Word('польётесь', 4),
  plural3rdPerson: Word('польются', 4),
  masculinePast: Word('полился', 3),
  femininePast: Word('полилась', 5),
  neuterPast: Word('полилось//полило'сь', 3),
  pluralPast: Word('полились//полили'сь', 3),
  imperativeInformal: Word('полейся', 3),
  imperativeFormal: Word('полейтесь', 3),
  imperfect: [],
};

perfectVerbs.set(политься.name.text, политься);

export { политься };