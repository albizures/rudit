import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подкоситься: PerfectVerb = {
  name: Word('подкоситься', 6),
  singular1stPerson: Word('подкошусь', 6),
  singular2ndPerson: Word('подкосишься', 4),
  singular3rdPerson: Word('подкосится', 4),
  plural1stPerson: Word('подкосимся', 4),
  plural2ndPerson: Word('подкоситесь', 4),
  plural3rdPerson: Word('подкосятся', 4),
  masculinePast: Word('подкосился', 6),
  femininePast: Word('подкосилась', 6),
  neuterPast: Word('подкосилось', 6),
  pluralPast: Word('подкосились', 6),
  imperativeInformal: Word('подкосись', 6),
  imperativeFormal: Word('подкоситесь', 6),
  imperfect: [],
};

perfectVerbs.set(подкоситься.name.text, подкоситься);

export { подкоситься };