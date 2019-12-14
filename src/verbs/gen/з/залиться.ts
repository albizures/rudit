import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const залиться: PerfectVerb = {
  name: Word('залиться', 3),
  singular1stPerson: Word('зальюсь', 4),
  singular2ndPerson: Word('зальёшься', 1),
  singular3rdPerson: Word('зальётся', 1),
  plural1stPerson: Word('зальёмся', 1),
  plural2ndPerson: Word('зальётесь', 1),
  plural3rdPerson: Word('зальются', 4),
  masculinePast: Word('залился', 3),
  femininePast: Word('залилась', 5),
  neuterPast: Word('залилось//залило'сь', 3),
  pluralPast: Word('залились//залили'сь', 3),
  imperativeInformal: Word('залейся', 3),
  imperativeFormal: Word('залейтесь', 3),
  imperfect: [],
};

perfectVerbs.set(залиться.name.text, залиться);

export { залиться };