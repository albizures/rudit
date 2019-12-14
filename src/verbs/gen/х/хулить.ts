import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const хулить: PerfectVerb = {
  name: Word('хулить', 3),
  singular1stPerson: Word('хулю', 3),
  singular2ndPerson: Word('хулишь', 3),
  singular3rdPerson: Word('хулит', 3),
  plural1stPerson: Word('хулим', 3),
  plural2ndPerson: Word('хулите', 3),
  plural3rdPerson: Word('хулят', 3),
  masculinePast: Word('хулил', 3),
  femininePast: Word('хулила', 3),
  neuterPast: Word('хулило', 3),
  pluralPast: Word('хулили', 3),
  imperativeInformal: Word('хули', 3),
  imperativeFormal: Word('хулите', 3),
  imperfect: [],
};

perfectVerbs.set(хулить.name.text, хулить);

export { хулить };