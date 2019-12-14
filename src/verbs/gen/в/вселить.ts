import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вселить: PerfectVerb = {
  name: Word('вселить', 4),
  singular1stPerson: Word('вселю', 4),
  singular2ndPerson: Word('вселишь', 4),
  singular3rdPerson: Word('вселит', 4),
  plural1stPerson: Word('вселим', 4),
  plural2ndPerson: Word('вселите', 4),
  plural3rdPerson: Word('вселят', 4),
  masculinePast: Word('вселил', 4),
  femininePast: Word('вселила', 4),
  neuterPast: Word('вселило', 4),
  pluralPast: Word('вселили', 4),
  imperativeInformal: Word('всели', 4),
  imperativeFormal: Word('вселите', 4),
  imperfect: [],
};

perfectVerbs.set(вселить.name.text, вселить);

export { вселить };