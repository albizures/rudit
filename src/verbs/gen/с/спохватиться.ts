import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спохватиться: PerfectVerb = {
  name: Word('спохватиться', 7),
  singular1stPerson: Word('спохвачусь', 7),
  singular2ndPerson: Word('спохватишься', 5),
  singular3rdPerson: Word('спохватится', 5),
  plural1stPerson: Word('спохватимся', 5),
  plural2ndPerson: Word('спохватитесь', 5),
  plural3rdPerson: Word('спохватятся', 5),
  masculinePast: Word('спохватился', 7),
  femininePast: Word('спохватилась', 7),
  neuterPast: Word('спохватилось', 7),
  pluralPast: Word('спохватились', 7),
  imperativeInformal: Word('спохватись', 7),
  imperativeFormal: Word('спохватитесь', 7),
  imperfect: [],
};

perfectVerbs.set(спохватиться.name.text, спохватиться);

export { спохватиться };