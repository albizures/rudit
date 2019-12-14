import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заскулить: PerfectVerb = {
  name: Word('заскулить', 6),
  singular1stPerson: Word('заскулю', 6),
  singular2ndPerson: Word('заскулишь', 6),
  singular3rdPerson: Word('заскулит', 6),
  plural1stPerson: Word('заскулим', 6),
  plural2ndPerson: Word('заскулите', 6),
  plural3rdPerson: Word('заскулят', 6),
  masculinePast: Word('заскулил', 6),
  femininePast: Word('заскулила', 6),
  neuterPast: Word('заскулило', 6),
  pluralPast: Word('заскулили', 6),
  imperativeInformal: Word('заскули', 6),
  imperativeFormal: Word('заскулите', 6),
  imperfect: [],
};

perfectVerbs.set(заскулить.name.text, заскулить);

export { заскулить };