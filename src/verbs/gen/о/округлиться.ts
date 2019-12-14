import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const округлиться: PerfectVerb = {
  name: Word('округлиться', 6),
  singular1stPerson: Word('округлюсь', 6),
  singular2ndPerson: Word('округлишься', 6),
  singular3rdPerson: Word('округлится', 6),
  plural1stPerson: Word('округлимся', 6),
  plural2ndPerson: Word('округлитесь', 6),
  plural3rdPerson: Word('округлятся', 6),
  masculinePast: Word('округлился', 6),
  femininePast: Word('округлилась', 6),
  neuterPast: Word('округлилось', 6),
  pluralPast: Word('округлились', 6),
  imperativeInformal: Word('округлись', 6),
  imperativeFormal: Word('округлитесь', 6),
  imperfect: [],
};

perfectVerbs.set(округлиться.name.text, округлиться);

export { округлиться };