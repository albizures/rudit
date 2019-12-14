import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наложить: PerfectVerb = {
  name: Word('наложить', 5),
  singular1stPerson: Word('наложу', 5),
  singular2ndPerson: Word('наложишь', 3),
  singular3rdPerson: Word('наложит', 3),
  plural1stPerson: Word('наложим', 3),
  plural2ndPerson: Word('наложите', 3),
  plural3rdPerson: Word('наложат', 3),
  masculinePast: Word('наложил', 5),
  femininePast: Word('наложила', 5),
  neuterPast: Word('наложило', 5),
  pluralPast: Word('наложили', 5),
  imperativeInformal: Word('наложи', 5),
  imperativeFormal: Word('наложите', 5),
  imperfect: [],
};

perfectVerbs.set(наложить.name.text, наложить);

export { наложить };