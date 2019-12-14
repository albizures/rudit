import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const говориться: PerfectVerb = {
  name: Word('говориться', 5),
  singular1stPerson: Word('говорюсь', 5),
  singular2ndPerson: Word('говоришься', 5),
  singular3rdPerson: Word('говорится', 5),
  plural1stPerson: Word('говоримся', 5),
  plural2ndPerson: Word('говоритесь', 5),
  plural3rdPerson: Word('говорятся', 5),
  masculinePast: Word('говорился', 5),
  femininePast: Word('говорилась', 5),
  neuterPast: Word('говорилось', 5),
  pluralPast: Word('говорились', 5),
  imperativeInformal: Word('говорись', 5),
  imperativeFormal: Word('говоритесь', 5),
  imperfect: [],
};

perfectVerbs.set(говориться.name.text, говориться);

export { говориться };