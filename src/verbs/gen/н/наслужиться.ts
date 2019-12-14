import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наслужиться: PerfectVerb = {
  name: Word('наслужиться', 6),
  singular1stPerson: Word('наслужусь', 6),
  singular2ndPerson: Word('наслужишься', 4),
  singular3rdPerson: Word('наслужится', 4),
  plural1stPerson: Word('наслужимся', 4),
  plural2ndPerson: Word('наслужитесь', 4),
  plural3rdPerson: Word('наслужатся', 4),
  masculinePast: Word('наслужился', 6),
  femininePast: Word('наслужилась', 6),
  neuterPast: Word('наслужилось', 6),
  pluralPast: Word('наслужились', 6),
  imperativeInformal: Word('наслужись', 6),
  imperativeFormal: Word('наслужитесь', 6),
  imperfect: [],
};

perfectVerbs.set(наслужиться.name.text, наслужиться);

export { наслужиться };