import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переесть: PerfectVerb = {
  name: Word('переесть', 4),
  singular1stPerson: Word('переем', 4),
  singular2ndPerson: Word('переешь', 4),
  singular3rdPerson: Word('переест', 4),
  plural1stPerson: Word('переедим', 6),
  plural2ndPerson: Word('переедите', 6),
  plural3rdPerson: Word('переедят', 6),
  masculinePast: Word('переел', 4),
  femininePast: Word('переела', 4),
  neuterPast: Word('переело', 4),
  pluralPast: Word('переели', 4),
  imperativeInformal: Word('переешь', 4),
  imperativeFormal: Word('переешьте', 4),
  imperfect: [],
};

perfectVerbs.set(переесть.name.text, переесть);

export { переесть };