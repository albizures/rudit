import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отсрочить: PerfectVerb = {
  name: Word('отсрочить', 4),
  singular1stPerson: Word('отсрочу', 4),
  singular2ndPerson: Word('отсрочишь', 4),
  singular3rdPerson: Word('отсрочит', 4),
  plural1stPerson: Word('отсрочим', 4),
  plural2ndPerson: Word('отсрочите', 4),
  plural3rdPerson: Word('отсрочат', 4),
  masculinePast: Word('отсрочил', 4),
  femininePast: Word('отсрочила', 4),
  neuterPast: Word('отсрочило', 4),
  pluralPast: Word('отсрочили', 4),
  imperativeInformal: Word('отсрочь', 4),
  imperativeFormal: Word('отсрочьте', 4),
  imperfect: ['отсрочивать'],
};

perfectVerbs.set(отсрочить.name.text, отсрочить);

export { отсрочить };