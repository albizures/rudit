import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const продаваться: PerfectVerb = {
  name: Word('продаваться', 6),
  singular1stPerson: Word('продаюсь', 5),
  singular2ndPerson: Word('продаёшься', 4),
  singular3rdPerson: Word('продаётся', 4),
  plural1stPerson: Word('продаёмся', 4),
  plural2ndPerson: Word('продаётесь', 4),
  plural3rdPerson: Word('продаются', 5),
  masculinePast: Word('продавался', 6),
  femininePast: Word('продавалась', 6),
  neuterPast: Word('продавалось', 6),
  pluralPast: Word('продавались', 6),
  imperativeInformal: Word('продавайся', 6),
  imperativeFormal: Word('продавайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(продаваться.name.text, продаваться);

export { продаваться };