import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расшириться: PerfectVerb = {
  name: Word('расшириться', 4),
  singular1stPerson: Word('расширюсь', 4),
  singular2ndPerson: Word('расширишься', 4),
  singular3rdPerson: Word('расширится', 4),
  plural1stPerson: Word('расширимся', 4),
  plural2ndPerson: Word('расширитесь', 4),
  plural3rdPerson: Word('расширятся', 4),
  masculinePast: Word('расширился', 4),
  femininePast: Word('расширилась', 4),
  neuterPast: Word('расширилось', 4),
  pluralPast: Word('расширились', 4),
  imperativeInformal: Word('расширься', 4),
  imperativeFormal: Word('расширьтесь', 4),
  imperfect: [],
};

perfectVerbs.set(расшириться.name.text, расшириться);

export { расшириться };