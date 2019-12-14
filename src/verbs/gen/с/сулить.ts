import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сулить: PerfectVerb = {
  name: Word('сулить', 3),
  singular1stPerson: Word('сулю', 3),
  singular2ndPerson: Word('сулишь', 3),
  singular3rdPerson: Word('сулит', 3),
  plural1stPerson: Word('сулим', 3),
  plural2ndPerson: Word('сулите', 3),
  plural3rdPerson: Word('сулят', 3),
  masculinePast: Word('сулил', 3),
  femininePast: Word('сулила', 3),
  neuterPast: Word('сулило', 3),
  pluralPast: Word('сулили', 3),
  imperativeInformal: Word('сули', 3),
  imperativeFormal: Word('сулите', 3),
  imperfect: [],
};

perfectVerbs.set(сулить.name.text, сулить);

export { сулить };