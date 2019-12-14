import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возгласить: PerfectVerb = {
  name: Word('возгласить', 7),
  singular1stPerson: Word('возглашу', 7),
  singular2ndPerson: Word('возгласишь', 7),
  singular3rdPerson: Word('возгласит', 7),
  plural1stPerson: Word('возгласим', 7),
  plural2ndPerson: Word('возгласите', 7),
  plural3rdPerson: Word('возгласят', 7),
  masculinePast: Word('возгласил', 7),
  femininePast: Word('возгласила', 7),
  neuterPast: Word('возгласило', 7),
  pluralPast: Word('возгласили', 7),
  imperativeInformal: Word('возгласи', 7),
  imperativeFormal: Word('возгласите', 7),
  imperfect: [],
};

perfectVerbs.set(возгласить.name.text, возгласить);

export { возгласить };