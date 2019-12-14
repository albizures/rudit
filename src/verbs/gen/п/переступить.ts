import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переступить: PerfectVerb = {
  name: Word('переступить', 8),
  singular1stPerson: Word('переступлю', 9),
  singular2ndPerson: Word('переступишь', 6),
  singular3rdPerson: Word('переступит', 6),
  plural1stPerson: Word('переступим', 6),
  plural2ndPerson: Word('переступите', 6),
  plural3rdPerson: Word('переступят', 6),
  masculinePast: Word('переступил', 8),
  femininePast: Word('переступила', 8),
  neuterPast: Word('переступило', 8),
  pluralPast: Word('переступили', 8),
  imperativeInformal: Word('переступи', 8),
  imperativeFormal: Word('переступите', 8),
  imperfect: [],
};

perfectVerbs.set(переступить.name.text, переступить);

export { переступить };