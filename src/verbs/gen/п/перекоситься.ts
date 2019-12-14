import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перекоситься: PerfectVerb = {
  name: Word('перекоситься', 7),
  singular1stPerson: Word('перекошусь', 7),
  singular2ndPerson: Word('перекосишься', 7),
  singular3rdPerson: Word('перекосится', 7),
  plural1stPerson: Word('перекосимся', 7),
  plural2ndPerson: Word('перекоситесь', 7),
  plural3rdPerson: Word('перекосятся', 7),
  masculinePast: Word('перекосился', 7),
  femininePast: Word('перекосилась', 7),
  neuterPast: Word('перекосилось', 7),
  pluralPast: Word('перекосились', 7),
  imperativeInformal: Word('перекосись', 7),
  imperativeFormal: Word('перекоситесь', 7),
  imperfect: [],
};

perfectVerbs.set(перекоситься.name.text, перекоситься);

export { перекоситься };