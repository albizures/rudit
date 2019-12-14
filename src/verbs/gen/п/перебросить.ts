import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перебросить: PerfectVerb = {
  name: Word('перебросить', 6),
  singular1stPerson: Word('переброшу', 6),
  singular2ndPerson: Word('перебросишь', 6),
  singular3rdPerson: Word('перебросит', 6),
  plural1stPerson: Word('перебросим', 6),
  plural2ndPerson: Word('перебросите', 6),
  plural3rdPerson: Word('перебросят', 6),
  masculinePast: Word('перебросил', 6),
  femininePast: Word('перебросила', 6),
  neuterPast: Word('перебросило', 6),
  pluralPast: Word('перебросили', 6),
  imperativeInformal: Word('перебрось', 6),
  imperativeFormal: Word('перебросьте', 6),
  imperfect: [],
};

perfectVerbs.set(перебросить.name.text, перебросить);

export { перебросить };