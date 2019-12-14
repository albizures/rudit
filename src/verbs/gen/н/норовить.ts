import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const норовить: PerfectVerb = {
  name: Word('норовить', 5),
  singular1stPerson: Word('норовлю', 6),
  singular2ndPerson: Word('норовишь', 5),
  singular3rdPerson: Word('норовит', 5),
  plural1stPerson: Word('норовим', 5),
  plural2ndPerson: Word('норовите', 5),
  plural3rdPerson: Word('норовят', 5),
  masculinePast: Word('норовил', 5),
  femininePast: Word('норовила', 5),
  neuterPast: Word('норовило', 5),
  pluralPast: Word('норовили', 5),
  imperativeInformal: Word('норови', 5),
  imperativeFormal: Word('норовите', 5),
  imperfect: [],
};

perfectVerbs.set(норовить.name.text, норовить);

export { норовить };