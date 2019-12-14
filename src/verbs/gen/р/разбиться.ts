import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разбиться: PerfectVerb = {
  name: Word('разбиться', 4),
  singular1stPerson: Word('разобьюсь', 6),
  singular2ndPerson: Word('разобьёшься', 1),
  singular3rdPerson: Word('разобьётся', 1),
  plural1stPerson: Word('разобьёмся', 1),
  plural2ndPerson: Word('разобьётесь', 1),
  plural3rdPerson: Word('разобьются', 6),
  masculinePast: Word('разбился', 4),
  femininePast: Word('разбилась', 4),
  neuterPast: Word('разбилось', 4),
  pluralPast: Word('разбились', 4),
  imperativeInformal: Word('разбейся', 4),
  imperativeFormal: Word('разбейтесь', 4),
  imperfect: [],
};

perfectVerbs.set(разбиться.name.text, разбиться);

export { разбиться };