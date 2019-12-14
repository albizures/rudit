import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рулить: PerfectVerb = {
  name: Word('рулить', 3),
  singular1stPerson: Word('рулю', 3),
  singular2ndPerson: Word('рулишь', 3),
  singular3rdPerson: Word('рулит', 3),
  plural1stPerson: Word('рулим', 3),
  plural2ndPerson: Word('рулите', 3),
  plural3rdPerson: Word('рулят', 3),
  masculinePast: Word('рулил', 3),
  femininePast: Word('рулила', 3),
  neuterPast: Word('рулило', 3),
  pluralPast: Word('рулили', 3),
  imperativeInformal: Word('рули', 3),
  imperativeFormal: Word('рулите', 3),
  imperfect: [],
};

perfectVerbs.set(рулить.name.text, рулить);

export { рулить };