import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ступить: PerfectVerb = {
  name: Word('ступить', 4),
  singular1stPerson: Word('ступлю', 5),
  singular2ndPerson: Word('ступишь', 2),
  singular3rdPerson: Word('ступит', 2),
  plural1stPerson: Word('ступим', 2),
  plural2ndPerson: Word('ступите', 2),
  plural3rdPerson: Word('ступят', 2),
  masculinePast: Word('ступил', 4),
  femininePast: Word('ступила', 4),
  neuterPast: Word('ступило', 4),
  pluralPast: Word('ступили', 4),
  imperativeInformal: Word('ступи', 4),
  imperativeFormal: Word('ступите', 4),
  imperfect: [],
};

perfectVerbs.set(ступить.name.text, ступить);

export { ступить };