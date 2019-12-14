import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подхватиться: PerfectVerb = {
  name: Word('подхватиться', 7),
  singular1stPerson: Word('подхвачусь', 7),
  singular2ndPerson: Word('подхватишься', 5),
  singular3rdPerson: Word('подхватится', 5),
  plural1stPerson: Word('подхватимся', 5),
  plural2ndPerson: Word('подхватитесь', 5),
  plural3rdPerson: Word('подхватятся', 5),
  masculinePast: Word('подхватился', 7),
  femininePast: Word('подхватилась', 7),
  neuterPast: Word('подхватилось', 7),
  pluralPast: Word('подхватились', 7),
  imperativeInformal: Word('подхватись', 7),
  imperativeFormal: Word('подхватитесь', 7),
  imperfect: [],
};

perfectVerbs.set(подхватиться.name.text, подхватиться);

export { подхватиться };