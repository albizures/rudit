import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изморить: PerfectVerb = {
  name: Word('изморить', 5),
  singular1stPerson: Word('изморю', 5),
  singular2ndPerson: Word('изморишь', 5),
  singular3rdPerson: Word('изморит', 5),
  plural1stPerson: Word('изморим', 5),
  plural2ndPerson: Word('изморите', 5),
  plural3rdPerson: Word('изморят', 5),
  masculinePast: Word('изморил', 5),
  femininePast: Word('изморила', 5),
  neuterPast: Word('изморило', 5),
  pluralPast: Word('изморили', 5),
  imperativeInformal: Word('измори', 5),
  imperativeFormal: Word('изморите', 5),
  imperfect: [],
};

perfectVerbs.set(изморить.name.text, изморить);

export { изморить };