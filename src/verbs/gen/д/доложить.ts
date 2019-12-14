import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доложить: PerfectVerb = {
  name: Word('доложить', 5),
  singular1stPerson: Word('доложу', 5),
  singular2ndPerson: Word('доложишь', 3),
  singular3rdPerson: Word('доложит', 3),
  plural1stPerson: Word('доложим', 3),
  plural2ndPerson: Word('доложите', 3),
  plural3rdPerson: Word('доложат', 3),
  masculinePast: Word('доложил', 5),
  femininePast: Word('доложила', 5),
  neuterPast: Word('доложило', 5),
  pluralPast: Word('доложили', 5),
  imperativeInformal: Word('доложи', 5),
  imperativeFormal: Word('доложите', 5),
  imperfect: [],
};

perfectVerbs.set(доложить.name.text, доложить);

export { доложить };