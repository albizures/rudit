import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отгрузить: PerfectVerb = {
  name: Word('отгрузить', 6),
  singular1stPerson: Word('отгружу', 6),
  singular2ndPerson: Word('отгрузишь', 4),
  singular3rdPerson: Word('отгрузит', 4),
  plural1stPerson: Word('отгрузим', 4),
  plural2ndPerson: Word('отгрузите', 4),
  plural3rdPerson: Word('отгрузят', 4),
  masculinePast: Word('отгрузил', 6),
  femininePast: Word('отгрузила', 6),
  neuterPast: Word('отгрузило', 6),
  pluralPast: Word('отгрузили', 6),
  imperativeInformal: Word('отгрузи', 6),
  imperativeFormal: Word('отгрузите', 6),
  imperfect: [],
};

perfectVerbs.set(отгрузить.name.text, отгрузить);

export { отгрузить };