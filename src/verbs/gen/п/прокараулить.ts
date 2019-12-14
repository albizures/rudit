import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прокараулить: PerfectVerb = {
  name: Word('прокараулить', 7),
  singular1stPerson: Word('прокараулю', 7),
  singular2ndPerson: Word('прокараулишь', 7),
  singular3rdPerson: Word('прокараулит', 7),
  plural1stPerson: Word('прокараулим', 7),
  plural2ndPerson: Word('прокараулите', 7),
  plural3rdPerson: Word('прокараулят', 7),
  masculinePast: Word('прокараулил', 7),
  femininePast: Word('прокараулила', 7),
  neuterPast: Word('прокараулило', 7),
  pluralPast: Word('прокараулили', 7),
  imperativeInformal: Word('прокарауль', 7),
  imperativeFormal: Word('прокараульте', 7),
  imperfect: [],
};

perfectVerbs.set(прокараулить.name.text, прокараулить);

export { прокараулить };