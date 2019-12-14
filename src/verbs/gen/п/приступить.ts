import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приступить: PerfectVerb = {
  name: Word('приступить', 7),
  singular1stPerson: Word('приступлю', 8),
  singular2ndPerson: Word('приступишь', 5),
  singular3rdPerson: Word('приступит', 5),
  plural1stPerson: Word('приступим', 5),
  plural2ndPerson: Word('приступите', 5),
  plural3rdPerson: Word('приступят', 5),
  masculinePast: Word('приступил', 7),
  femininePast: Word('приступила', 7),
  neuterPast: Word('приступило', 7),
  pluralPast: Word('приступили', 7),
  imperativeInformal: Word('приступи', 7),
  imperativeFormal: Word('приступите', 7),
  imperfect: [],
};

perfectVerbs.set(приступить.name.text, приступить);

export { приступить };