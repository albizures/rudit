import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нагрузить: PerfectVerb = {
  name: Word('нагрузить', 6),
  singular1stPerson: Word('нагружу', 6),
  singular2ndPerson: Word('нагрузишь', 4),
  singular3rdPerson: Word('нагрузит', 4),
  plural1stPerson: Word('нагрузим', 4),
  plural2ndPerson: Word('нагрузите', 4),
  plural3rdPerson: Word('нагрузят', 4),
  masculinePast: Word('нагрузил', 6),
  femininePast: Word('нагрузила', 6),
  neuterPast: Word('нагрузило', 6),
  pluralPast: Word('нагрузили', 6),
  imperativeInformal: Word('нагрузи', 6),
  imperativeFormal: Word('нагрузите', 6),
  imperfect: [],
};

perfectVerbs.set(нагрузить.name.text, нагрузить);

export { нагрузить };