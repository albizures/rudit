import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const согласить: PerfectVerb = {
  name: Word('согласить', 6),
  singular1stPerson: Word('соглашу', 6),
  singular2ndPerson: Word('согласишь', 6),
  singular3rdPerson: Word('согласит', 6),
  plural1stPerson: Word('согласим', 6),
  plural2ndPerson: Word('согласите', 6),
  plural3rdPerson: Word('согласят', 6),
  masculinePast: Word('согласил', 6),
  femininePast: Word('согласила', 6),
  neuterPast: Word('согласило', 6),
  pluralPast: Word('согласили', 6),
  imperativeInformal: Word('согласи', 6),
  imperativeFormal: Word('согласите', 6),
  imperfect: [],
};

perfectVerbs.set(согласить.name.text, согласить);

export { согласить };