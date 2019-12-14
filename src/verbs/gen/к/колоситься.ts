import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const колоситься: PerfectVerb = {
  name: Word('колоситься', 5),
  singular1stPerson: Word('колошусь', 5),
  singular2ndPerson: Word('колосишься', 5),
  singular3rdPerson: Word('колосится', 5),
  plural1stPerson: Word('колосимся', 5),
  plural2ndPerson: Word('колоситесь', 5),
  plural3rdPerson: Word('колосятся', 5),
  masculinePast: Word('колосился', 5),
  femininePast: Word('колосилась', 5),
  neuterPast: Word('колосилось', 5),
  pluralPast: Word('колосились', 5),
  imperativeInformal: Word('колосись', 5),
  imperativeFormal: Word('колоситесь', 5),
  imperfect: [],
};

perfectVerbs.set(колоситься.name.text, колоситься);

export { колоситься };