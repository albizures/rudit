import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const безобразить: PerfectVerb = {
  name: Word('безобразить', 6),
  singular1stPerson: Word('безображу', 6),
  singular2ndPerson: Word('безобразишь', 6),
  singular3rdPerson: Word('безобразит', 6),
  plural1stPerson: Word('безобразим', 6),
  plural2ndPerson: Word('безобразите', 6),
  plural3rdPerson: Word('безобразят', 6),
  masculinePast: Word('безобразил', 6),
  femininePast: Word('безобразила', 6),
  neuterPast: Word('безобразило', 6),
  pluralPast: Word('безобразили', 6),
  imperativeInformal: Word('безобразь', 6),
  imperativeFormal: Word('безобразьте', 6),
  imperfect: [],
};

perfectVerbs.set(безобразить.name.text, безобразить);

export { безобразить };