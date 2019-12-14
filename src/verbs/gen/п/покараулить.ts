import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покараулить: PerfectVerb = {
  name: Word('покараулить', 6),
  singular1stPerson: Word('покараулю', 6),
  singular2ndPerson: Word('покараулишь', 6),
  singular3rdPerson: Word('покараулит', 6),
  plural1stPerson: Word('покараулим', 6),
  plural2ndPerson: Word('покараулите', 6),
  plural3rdPerson: Word('покараулят', 6),
  masculinePast: Word('покараулил', 6),
  femininePast: Word('покараулила', 6),
  neuterPast: Word('покараулило', 6),
  pluralPast: Word('покараулили', 6),
  imperativeInformal: Word('покарауль', 6),
  imperativeFormal: Word('покараульте', 6),
  imperfect: [],
};

perfectVerbs.set(покараулить.name.text, покараулить);

export { покараулить };