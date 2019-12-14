import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изложить: PerfectVerb = {
  name: Word('изложить', 5),
  singular1stPerson: Word('изложу', 5),
  singular2ndPerson: Word('изложишь', 3),
  singular3rdPerson: Word('изложит', 3),
  plural1stPerson: Word('изложим', 3),
  plural2ndPerson: Word('изложите', 3),
  plural3rdPerson: Word('изложат', 3),
  masculinePast: Word('изложил', 5),
  femininePast: Word('изложила', 5),
  neuterPast: Word('изложило', 5),
  pluralPast: Word('изложили', 5),
  imperativeInformal: Word('изложи', 5),
  imperativeFormal: Word('изложите', 5),
  imperfect: [],
};

perfectVerbs.set(изложить.name.text, изложить);

export { изложить };