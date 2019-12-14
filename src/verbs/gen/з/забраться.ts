import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const забраться: PerfectVerb = {
  name: Word('забраться', 4),
  singular1stPerson: Word('заберусь', 5),
  singular2ndPerson: Word('заберёшься', 5),
  singular3rdPerson: Word('заберётся', 5),
  plural1stPerson: Word('заберёмся', 5),
  plural2ndPerson: Word('заберётесь', 5),
  plural3rdPerson: Word('заберутся', 5),
  masculinePast: Word('забрался', 4),
  femininePast: Word('забралась', 6),
  neuterPast: Word('забралось//забрало'сь', 4),
  pluralPast: Word('забрались//забрали'сь', 4),
  imperativeInformal: Word('заберись', 5),
  imperativeFormal: Word('заберитесь', 5),
  imperfect: [],
};

perfectVerbs.set(забраться.name.text, забраться);

export { забраться };