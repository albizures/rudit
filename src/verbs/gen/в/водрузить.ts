import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const водрузить: PerfectVerb = {
  name: Word('водрузить', 6),
  singular1stPerson: Word('водружу', 6),
  singular2ndPerson: Word('водрузишь', 6),
  singular3rdPerson: Word('водрузит', 6),
  plural1stPerson: Word('водрузим', 6),
  plural2ndPerson: Word('водрузите', 6),
  plural3rdPerson: Word('водрузят', 6),
  masculinePast: Word('водрузил', 6),
  femininePast: Word('водрузила', 6),
  neuterPast: Word('водрузило', 6),
  pluralPast: Word('водрузили', 6),
  imperativeInformal: Word('водрузи', 6),
  imperativeFormal: Word('водрузите', 6),
  imperfect: ['водружать'],
};

perfectVerbs.set(водрузить.name.text, водрузить);

export { водрузить };