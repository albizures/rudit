import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const омрачиться: PerfectVerb = {
  name: Word('омрачиться', 5),
  singular1stPerson: Word('омрачусь', 5),
  singular2ndPerson: Word('омрачишься', 5),
  singular3rdPerson: Word('омрачится', 5),
  plural1stPerson: Word('омрачимся', 5),
  plural2ndPerson: Word('омрачитесь', 5),
  plural3rdPerson: Word('омрачатся', 5),
  masculinePast: Word('омрачился', 5),
  femininePast: Word('омрачилась', 5),
  neuterPast: Word('омрачилось', 5),
  pluralPast: Word('омрачились', 5),
  imperativeInformal: Word('омрачись', 5),
  imperativeFormal: Word('омрачитесь', 5),
  imperfect: [],
};

perfectVerbs.set(омрачиться.name.text, омрачиться);

export { омрачиться };