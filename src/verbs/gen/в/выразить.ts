import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выразить: PerfectVerb = {
  name: Word('выразить', 1),
  singular1stPerson: Word('выражу', 1),
  singular2ndPerson: Word('выразишь', 1),
  singular3rdPerson: Word('выразит', 1),
  plural1stPerson: Word('выразим', 1),
  plural2ndPerson: Word('выразите', 1),
  plural3rdPerson: Word('выразят', 1),
  masculinePast: Word('выразил', 1),
  femininePast: Word('выразила', 1),
  neuterPast: Word('выразило', 1),
  pluralPast: Word('выразили', 1),
  imperativeInformal: Word('выразь', 1),
  imperativeFormal: Word('выразьте', 1),
  imperfect: ['выражать'],
};

perfectVerbs.set(выразить.name.text, выразить);

export { выразить };