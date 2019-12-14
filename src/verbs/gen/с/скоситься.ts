import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скоситься: PerfectVerb = {
  name: Word('скоситься', 4),
  singular1stPerson: Word('скошусь', 4),
  singular2ndPerson: Word('скосишься', 4),
  singular3rdPerson: Word('скосится', 4),
  plural1stPerson: Word('скосимся', 4),
  plural2ndPerson: Word('скоситесь', 4),
  plural3rdPerson: Word('скосятся', 4),
  masculinePast: Word('скосился', 4),
  femininePast: Word('скосилась', 4),
  neuterPast: Word('скосилось', 4),
  pluralPast: Word('скосились', 4),
  imperativeInformal: Word('скосись', 4),
  imperativeFormal: Word('скоситесь', 4),
  imperfect: [],
};

perfectVerbs.set(скоситься.name.text, скоситься);

export { скоситься };