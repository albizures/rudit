import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запросить: PerfectVerb = {
  name: Word('запросить', 6),
  singular1stPerson: Word('запрошу', 6),
  singular2ndPerson: Word('запросишь', 4),
  singular3rdPerson: Word('запросит', 4),
  plural1stPerson: Word('запросим', 4),
  plural2ndPerson: Word('запросите', 4),
  plural3rdPerson: Word('запросят', 4),
  masculinePast: Word('запросил', 6),
  femininePast: Word('запросила', 6),
  neuterPast: Word('запросило', 6),
  pluralPast: Word('запросили', 6),
  imperativeInformal: Word('запроси', 6),
  imperativeFormal: Word('запросите', 6),
  imperfect: [],
};

perfectVerbs.set(запросить.name.text, запросить);

export { запросить };