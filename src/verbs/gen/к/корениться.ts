import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const корениться: PerfectVerb = {
  name: Word('корениться', 5),
  singular1stPerson: Word('коренюсь', 5),
  singular2ndPerson: Word('коренишься', 5),
  singular3rdPerson: Word('коренится', 5),
  plural1stPerson: Word('коренимся', 5),
  plural2ndPerson: Word('коренитесь', 5),
  plural3rdPerson: Word('коренятся', 5),
  masculinePast: Word('коренился', 5),
  femininePast: Word('коренилась', 5),
  neuterPast: Word('коренилось', 5),
  pluralPast: Word('коренились', 5),
  imperativeInformal: Word('коренись', 5),
  imperativeFormal: Word('коренитесь', 5),
  imperfect: [],
};

perfectVerbs.set(корениться.name.text, корениться);

export { корениться };