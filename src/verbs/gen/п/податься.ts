import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const податься: PerfectVerb = {
  name: Word('податься', 3),
  singular1stPerson: Word('подамся', 3),
  singular2ndPerson: Word('подашься', 3),
  singular3rdPerson: Word('подастся', 3),
  plural1stPerson: Word('подадимся', 5),
  plural2ndPerson: Word('подадитесь', 5),
  plural3rdPerson: Word('подадутся', 5),
  masculinePast: Word('подался', 3),
  femininePast: Word('подалась', 5),
  neuterPast: Word('подалось//подало'сь', 3),
  pluralPast: Word('подались//подали'сь', 3),
  imperativeInformal: Word('подайся', 3),
  imperativeFormal: Word('подайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(податься.name.text, податься);

export { податься };