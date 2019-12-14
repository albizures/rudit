import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обесславить: PerfectVerb = {
  name: Word('обесславить', 6),
  singular1stPerson: Word('обесславлю', 6),
  singular2ndPerson: Word('обесславишь', 6),
  singular3rdPerson: Word('обесславит', 6),
  plural1stPerson: Word('обесславим', 6),
  plural2ndPerson: Word('обесславите', 6),
  plural3rdPerson: Word('обесславят', 6),
  masculinePast: Word('обесславил', 6),
  femininePast: Word('обесславила', 6),
  neuterPast: Word('обесславило', 6),
  pluralPast: Word('обесславили', 6),
  imperativeInformal: Word('обесславь', 6),
  imperativeFormal: Word('обесславьте', 6),
  imperfect: [],
};

perfectVerbs.set(обесславить.name.text, обесславить);

export { обесславить };