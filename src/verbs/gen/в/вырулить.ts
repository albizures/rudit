import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вырулить: PerfectVerb = {
  name: Word('вырулить', 1),
  singular1stPerson: Word('вырулю', 1),
  singular2ndPerson: Word('вырулишь', 1),
  singular3rdPerson: Word('вырулит', 1),
  plural1stPerson: Word('вырулим', 1),
  plural2ndPerson: Word('вырулите', 1),
  plural3rdPerson: Word('вырулят', 1),
  masculinePast: Word('вырулил', 1),
  femininePast: Word('вырулила', 1),
  neuterPast: Word('вырулило', 1),
  pluralPast: Word('вырулили', 1),
  imperativeInformal: Word('вырули', 1),
  imperativeFormal: Word('вырулите', 1),
  imperfect: [],
};

perfectVerbs.set(вырулить.name.text, вырулить);

export { вырулить };