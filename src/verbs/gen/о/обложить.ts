import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обложить: PerfectVerb = {
  name: Word('обложить', 5),
  singular1stPerson: Word('обложу', 5),
  singular2ndPerson: Word('обложишь', 3),
  singular3rdPerson: Word('обложит', 3),
  plural1stPerson: Word('обложим', 3),
  plural2ndPerson: Word('обложите', 3),
  plural3rdPerson: Word('обложат', 3),
  masculinePast: Word('обложил', 5),
  femininePast: Word('обложила', 5),
  neuterPast: Word('обложило', 5),
  pluralPast: Word('обложили', 5),
  imperativeInformal: Word('обложи', 5),
  imperativeFormal: Word('обложите', 5),
  imperfect: [],
};

perfectVerbs.set(обложить.name.text, обложить);

export { обложить };