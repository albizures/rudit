import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приселить: PerfectVerb = {
  name: Word('приселить', 6),
  singular1stPerson: Word('приселю', 6),
  singular2ndPerson: Word('приселишь', 6),
  singular3rdPerson: Word('приселит', 6),
  plural1stPerson: Word('приселим', 6),
  plural2ndPerson: Word('приселите', 6),
  plural3rdPerson: Word('приселят', 6),
  masculinePast: Word('приселил', 6),
  femininePast: Word('приселила', 6),
  neuterPast: Word('приселило', 6),
  pluralPast: Word('приселили', 6),
  imperativeInformal: Word('присели', 6),
  imperativeFormal: Word('приселите', 6),
  imperfect: [],
};

perfectVerbs.set(приселить.name.text, приселить);

export { приселить };