import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наладиться: PerfectVerb = {
  name: Word('наладиться', 3),
  singular1stPerson: Word('налажусь', 3),
  singular2ndPerson: Word('наладишься', 3),
  singular3rdPerson: Word('наладится', 3),
  plural1stPerson: Word('наладимся', 3),
  plural2ndPerson: Word('наладитесь', 3),
  plural3rdPerson: Word('наладятся', 3),
  masculinePast: Word('наладился', 3),
  femininePast: Word('наладилась', 3),
  neuterPast: Word('наладилось', 3),
  pluralPast: Word('наладились', 3),
  imperativeInformal: Word('наладься', 3),
  imperativeFormal: Word('наладьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(наладиться.name.text, наладиться);

export { наладиться };