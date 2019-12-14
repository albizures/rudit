import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разрешиться: PerfectVerb = {
  name: Word('разрешиться', 6),
  singular1stPerson: Word('разрешусь', 6),
  singular2ndPerson: Word('разрешишься', 6),
  singular3rdPerson: Word('разрешится', 6),
  plural1stPerson: Word('разрешимся', 6),
  plural2ndPerson: Word('разрешитесь', 6),
  plural3rdPerson: Word('разрешатся', 6),
  masculinePast: Word('разрешился', 6),
  femininePast: Word('разрешилась', 6),
  neuterPast: Word('разрешилось', 6),
  pluralPast: Word('разрешились', 6),
  imperativeInformal: Word('разрешись', 6),
  imperativeFormal: Word('разрешитесь', 6),
  imperfect: [],
};

perfectVerbs.set(разрешиться.name.text, разрешиться);

export { разрешиться };