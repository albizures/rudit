import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возложить: PerfectVerb = {
  name: Word('возложить', 6),
  singular1stPerson: Word('возложу', 6),
  singular2ndPerson: Word('возложишь', 4),
  singular3rdPerson: Word('возложит', 4),
  plural1stPerson: Word('возложим', 4),
  plural2ndPerson: Word('возложите', 4),
  plural3rdPerson: Word('возложат', 4),
  masculinePast: Word('возложил', 6),
  femininePast: Word('возложила', 6),
  neuterPast: Word('возложило', 6),
  pluralPast: Word('возложили', 6),
  imperativeInformal: Word('возложи', 6),
  imperativeFormal: Word('возложите', 6),
  imperfect: [],
};

perfectVerbs.set(возложить.name.text, возложить);

export { возложить };