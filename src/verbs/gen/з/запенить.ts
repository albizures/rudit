import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запенить: PerfectVerb = {
  name: Word('запенить', 3),
  singular1stPerson: Word('запеню', 3),
  singular2ndPerson: Word('запенишь', 3),
  singular3rdPerson: Word('запенит', 3),
  plural1stPerson: Word('запеним', 3),
  plural2ndPerson: Word('запените', 3),
  plural3rdPerson: Word('запенят', 3),
  masculinePast: Word('запенил', 3),
  femininePast: Word('запенила', 3),
  neuterPast: Word('запенило', 3),
  pluralPast: Word('запенили', 3),
  imperativeInformal: Word('запень', 3),
  imperativeFormal: Word('запеньте', 3),
  imperfect: [],
};

perfectVerbs.set(запенить.name.text, запенить);

export { запенить };