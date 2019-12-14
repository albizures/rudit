import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const навалиться: PerfectVerb = {
  name: Word('навалиться', 5),
  singular1stPerson: Word('навалюсь', 5),
  singular2ndPerson: Word('навалишься', 3),
  singular3rdPerson: Word('навалится', 3),
  plural1stPerson: Word('навалимся', 3),
  plural2ndPerson: Word('навалитесь', 3),
  plural3rdPerson: Word('навалятся', 3),
  masculinePast: Word('навалился', 5),
  femininePast: Word('навалилась', 5),
  neuterPast: Word('навалилось', 5),
  pluralPast: Word('навалились', 5),
  imperativeInformal: Word('навались', 5),
  imperativeFormal: Word('навалитесь', 5),
  imperfect: [],
};

perfectVerbs.set(навалиться.name.text, навалиться);

export { навалиться };