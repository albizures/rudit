import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const удаться: PerfectVerb = {
  name: Word('удаться', 2),
  singular1stPerson: Word('удамся', 2),
  singular2ndPerson: Word('удашься', 2),
  singular3rdPerson: Word('удастся', 2),
  plural1stPerson: Word('удадимся', 4),
  plural2ndPerson: Word('удадитесь', 4),
  plural3rdPerson: Word('удадутся', 4),
  masculinePast: Word('удался', 2),
  femininePast: Word('удалась', 4),
  neuterPast: Word('удалось//удало'сь', 2),
  pluralPast: Word('удались//удали'сь', 2),
  imperativeInformal: Word('удайся', 2),
  imperativeFormal: Word('удайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(удаться.name.text, удаться);

export { удаться };