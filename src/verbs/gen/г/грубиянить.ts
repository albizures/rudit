import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const грубиянить: PerfectVerb = {
  name: Word('грубиянить', 5),
  singular1stPerson: Word('грубияню', 5),
  singular2ndPerson: Word('грубиянишь', 5),
  singular3rdPerson: Word('грубиянит', 5),
  plural1stPerson: Word('грубияним', 5),
  plural2ndPerson: Word('грубияните', 5),
  plural3rdPerson: Word('грубиянят', 5),
  masculinePast: Word('грубиянил', 5),
  femininePast: Word('грубиянила', 5),
  neuterPast: Word('грубиянило', 5),
  pluralPast: Word('грубиянили', 5),
  imperativeInformal: Word('грубиянь', 5),
  imperativeFormal: Word('грубияньте', 5),
  imperfect: [],
};

perfectVerbs.set(грубиянить.name.text, грубиянить);

export { грубиянить };