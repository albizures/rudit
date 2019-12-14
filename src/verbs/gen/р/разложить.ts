import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разложить: PerfectVerb = {
  name: Word('разложить', 6),
  singular1stPerson: Word('разложу', 6),
  singular2ndPerson: Word('разложишь', 4),
  singular3rdPerson: Word('разложит', 4),
  plural1stPerson: Word('разложим', 4),
  plural2ndPerson: Word('разложите', 4),
  plural3rdPerson: Word('разложат', 4),
  masculinePast: Word('разложил', 6),
  femininePast: Word('разложила', 6),
  neuterPast: Word('разложило', 6),
  pluralPast: Word('разложили', 6),
  imperativeInformal: Word('разложи', 6),
  imperativeFormal: Word('разложите', 6),
  imperfect: [],
};

perfectVerbs.set(разложить.name.text, разложить);

export { разложить };