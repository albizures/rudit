import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тереться: PerfectVerb = {
  name: Word('тереться', 3),
  singular1stPerson: Word('трусь', 2),
  singular2ndPerson: Word('трёшься', 2),
  singular3rdPerson: Word('трётся', 2),
  plural1stPerson: Word('трёмся', 2),
  plural2ndPerson: Word('трётесь', 2),
  plural3rdPerson: Word('трутся', 2),
  masculinePast: Word('тёрся', 1),
  femininePast: Word('тёрлась', 1),
  neuterPast: Word('тёрлось', 1),
  pluralPast: Word('тёрлись', 1),
  imperativeInformal: Word('трись', 2),
  imperativeFormal: Word('тритесь', 2),
  imperfect: [],
};

perfectVerbs.set(тереться.name.text, тереться);

export { тереться };