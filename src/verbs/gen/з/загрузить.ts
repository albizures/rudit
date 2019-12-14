import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const загрузить: PerfectVerb = {
  name: Word('загрузить', 6),
  singular1stPerson: Word('загружу', 6),
  singular2ndPerson: Word('загрузишь', 4),
  singular3rdPerson: Word('загрузит', 4),
  plural1stPerson: Word('загрузим', 4),
  plural2ndPerson: Word('загрузите', 4),
  plural3rdPerson: Word('загрузят', 4),
  masculinePast: Word('загрузил', 6),
  femininePast: Word('загрузила', 6),
  neuterPast: Word('загрузило', 6),
  pluralPast: Word('загрузили', 6),
  imperativeInformal: Word('загрузи', 6),
  imperativeFormal: Word('загрузите', 6),
  imperfect: [],
};

perfectVerbs.set(загрузить.name.text, загрузить);

export { загрузить };