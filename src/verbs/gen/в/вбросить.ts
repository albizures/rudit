import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вбросить: PerfectVerb = {
  name: Word('вбросить', 3),
  singular1stPerson: Word('вброшу', 3),
  singular2ndPerson: Word('вбросишь', 3),
  singular3rdPerson: Word('вбросит', 3),
  plural1stPerson: Word('вбросим', 3),
  plural2ndPerson: Word('вбросите', 3),
  plural3rdPerson: Word('вбросят', 3),
  masculinePast: Word('вбросил', 3),
  femininePast: Word('вбросила', 3),
  neuterPast: Word('вбросило', 3),
  pluralPast: Word('вбросили', 3),
  imperativeInformal: Word('вбрось', 3),
  imperativeFormal: Word('вбросьте', 3),
  imperfect: [],
};

perfectVerbs.set(вбросить.name.text, вбросить);

export { вбросить };