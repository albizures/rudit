import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const гласить: PerfectVerb = {
  name: Word('гласить', 4),
  singular1stPerson: Word('глашу', 4),
  singular2ndPerson: Word('гласишь', 4),
  singular3rdPerson: Word('гласит', 4),
  plural1stPerson: Word('гласим', 4),
  plural2ndPerson: Word('гласите', 4),
  plural3rdPerson: Word('гласят', 4),
  masculinePast: Word('гласил', 4),
  femininePast: Word('гласила', 4),
  neuterPast: Word('гласило', 4),
  pluralPast: Word('гласили', 4),
  imperativeInformal: Word('гласи', 4),
  imperativeFormal: Word('гласите', 4),
  imperfect: [],
};

perfectVerbs.set(гласить.name.text, гласить);

export { гласить };