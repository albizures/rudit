import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подступить: PerfectVerb = {
  name: Word('подступить', 7),
  singular1stPerson: Word('подступлю', 8),
  singular2ndPerson: Word('подступишь', 5),
  singular3rdPerson: Word('подступит', 5),
  plural1stPerson: Word('подступим', 5),
  plural2ndPerson: Word('подступите', 5),
  plural3rdPerson: Word('подступят', 5),
  masculinePast: Word('подступил', 7),
  femininePast: Word('подступила', 7),
  neuterPast: Word('подступило', 7),
  pluralPast: Word('подступили', 7),
  imperativeInformal: Word('подступи', 7),
  imperativeFormal: Word('подступите', 7),
  imperfect: [],
};

perfectVerbs.set(подступить.name.text, подступить);

export { подступить };