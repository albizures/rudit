import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const увиться: PerfectVerb = {
  name: Word('увиться', 2),
  singular1stPerson: Word('увьюсь', 3),
  singular2ndPerson: Word('увьёшься', 7),
  singular3rdPerson: Word('увьётся', 6),
  plural1stPerson: Word('увьёмся', 6),
  plural2ndPerson: Word('увьётесь', 5),
  plural3rdPerson: Word('увьются', 3),
  masculinePast: Word('увился', 2),
  femininePast: Word('увилась', 4),
  neuterPast: Word('увилось//увило'сь', 2),
  pluralPast: Word('увились//увили'сь', 2),
  imperativeInformal: Word('увейся', 2),
  imperativeFormal: Word('увейтесь', 2),
  imperfect: [],
};

perfectVerbs.set(увиться.name.text, увиться);

export { увиться };