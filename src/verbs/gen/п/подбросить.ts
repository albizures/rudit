import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подбросить: PerfectVerb = {
  name: Word('подбросить', 5),
  singular1stPerson: Word('подброшу', 5),
  singular2ndPerson: Word('подбросишь', 5),
  singular3rdPerson: Word('подбросит', 5),
  plural1stPerson: Word('подбросим', 5),
  plural2ndPerson: Word('подбросите', 5),
  plural3rdPerson: Word('подбросят', 5),
  masculinePast: Word('подбросил', 5),
  femininePast: Word('подбросила', 5),
  neuterPast: Word('подбросило', 5),
  pluralPast: Word('подбросили', 5),
  imperativeInformal: Word('подбрось', 5),
  imperativeFormal: Word('подбросьте', 5),
  imperfect: [],
};

perfectVerbs.set(подбросить.name.text, подбросить);

export { подбросить };