import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const грузить: PerfectVerb = {
  name: Word('грузить', 4),
  singular1stPerson: Word('гружу', 4),
  singular2ndPerson: Word('грузишь', 2),
  singular3rdPerson: Word('грузит', 2),
  plural1stPerson: Word('грузим', 2),
  plural2ndPerson: Word('грузите', 2),
  plural3rdPerson: Word('грузят', 2),
  masculinePast: Word('грузил', 4),
  femininePast: Word('грузила', 4),
  neuterPast: Word('грузило', 4),
  pluralPast: Word('грузили', 4),
  imperativeInformal: Word('грузи', 4),
  imperativeFormal: Word('грузите', 4),
  imperfect: [],
};

perfectVerbs.set(грузить.name.text, грузить);

export { грузить };