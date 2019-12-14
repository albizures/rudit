import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поселить: PerfectVerb = {
  name: Word('поселить', 5),
  singular1stPerson: Word('поселю', 5),
  singular2ndPerson: Word('поселишь', 5),
  singular3rdPerson: Word('поселит', 5),
  plural1stPerson: Word('поселим', 5),
  plural2ndPerson: Word('поселите', 5),
  plural3rdPerson: Word('поселят', 5),
  masculinePast: Word('поселил', 5),
  femininePast: Word('поселила', 5),
  neuterPast: Word('поселило', 5),
  pluralPast: Word('поселили', 5),
  imperativeInformal: Word('посели', 5),
  imperativeFormal: Word('поселите', 5),
  imperfect: [],
};

perfectVerbs.set(поселить.name.text, поселить);

export { поселить };