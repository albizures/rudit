import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const убраться: PerfectVerb = {
  name: Word('убраться', 3),
  singular1stPerson: Word('уберусь', 4),
  singular2ndPerson: Word('уберёшься', 2),
  singular3rdPerson: Word('уберётся', 2),
  plural1stPerson: Word('уберёмся', 2),
  plural2ndPerson: Word('уберётесь', 2),
  plural3rdPerson: Word('уберутся', 4),
  masculinePast: Word('убрался', 3),
  femininePast: Word('убралась', 5),
  neuterPast: Word('убралось//убрало'сь', 3),
  pluralPast: Word('убрались//убрали'сь', 3),
  imperativeInformal: Word('уберись', 4),
  imperativeFormal: Word('уберитесь', 4),
  imperfect: [],
};

perfectVerbs.set(убраться.name.text, убраться);

export { убраться };