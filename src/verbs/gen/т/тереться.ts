import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тереться: PerfectVerb = {
  name: Word('тереться', 3),
  singular1stPerson: Word('трусь', 2),
  singular2ndPerson: Word('трёшься', 6),
  singular3rdPerson: Word('трётся', 5),
  plural1stPerson: Word('трёмся', 5),
  plural2ndPerson: Word('трётесь', 4),
  plural3rdPerson: Word('трутся', 2),
  masculinePast: Word('тёрся', 4),
  femininePast: Word('тёрлась', 4),
  neuterPast: Word('тёрлось', 4),
  pluralPast: Word('тёрлись', 4),
  imperativeInformal: Word('трись', 2),
  imperativeFormal: Word('тритесь', 2),
  imperfect: [],
};

perfectVerbs.set(тереться.name.text, тереться);

export { тереться };