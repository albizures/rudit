import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const укараулить: PerfectVerb = {
  name: Word('укараулить', 5),
  singular1stPerson: Word('укараулю', 5),
  singular2ndPerson: Word('укараулишь', 5),
  singular3rdPerson: Word('укараулит', 5),
  plural1stPerson: Word('укараулим', 5),
  plural2ndPerson: Word('укараулите', 5),
  plural3rdPerson: Word('укараулят', 5),
  masculinePast: Word('укараулил', 5),
  femininePast: Word('укараулила', 5),
  neuterPast: Word('укараулило', 5),
  pluralPast: Word('укараулили', 5),
  imperativeInformal: Word('укарауль', 5),
  imperativeFormal: Word('укараульте', 5),
  imperfect: [],
};

perfectVerbs.set(укараулить.name.text, укараулить);

export { укараулить };