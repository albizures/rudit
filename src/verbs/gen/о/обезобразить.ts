import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обезобразить: PerfectVerb = {
  name: Word('обезобразить', 7),
  singular1stPerson: Word('обезображу', 7),
  singular2ndPerson: Word('обезобразишь', 7),
  singular3rdPerson: Word('обезобразит', 7),
  plural1stPerson: Word('обезобразим', 7),
  plural2ndPerson: Word('обезобразите', 7),
  plural3rdPerson: Word('обезобразят', 7),
  masculinePast: Word('обезобразил', 7),
  femininePast: Word('обезобразила', 7),
  neuterPast: Word('обезобразило', 7),
  pluralPast: Word('обезобразили', 7),
  imperativeInformal: Word('обезобразь', 7),
  imperativeFormal: Word('обезобразьте', 7),
  imperfect: [],
};

perfectVerbs.set(обезобразить.name.text, обезобразить);

export { обезобразить };