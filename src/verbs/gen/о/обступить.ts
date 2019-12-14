import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обступить: PerfectVerb = {
  name: Word('обступить', 6),
  singular1stPerson: Word('обступлю', 7),
  singular2ndPerson: Word('обступишь', 4),
  singular3rdPerson: Word('обступит', 4),
  plural1stPerson: Word('обступим', 4),
  plural2ndPerson: Word('обступите', 4),
  plural3rdPerson: Word('обступят', 4),
  masculinePast: Word('обступил', 6),
  femininePast: Word('обступила', 6),
  neuterPast: Word('обступило', 6),
  pluralPast: Word('обступили', 6),
  imperativeInformal: Word('обступи', 6),
  imperativeFormal: Word('обступите', 6),
  imperfect: [],
};

perfectVerbs.set(обступить.name.text, обступить);

export { обступить };