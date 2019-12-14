import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const паклить: PerfectVerb = {
  name: Word('паклить', 1),
  singular1stPerson: Word('паклю', 1),
  singular2ndPerson: Word('паклишь', 1),
  singular3rdPerson: Word('паклит', 1),
  plural1stPerson: Word('паклим', 1),
  plural2ndPerson: Word('паклите', 1),
  plural3rdPerson: Word('паклят', 1),
  masculinePast: Word('паклил', 1),
  femininePast: Word('паклила', 1),
  neuterPast: Word('паклило', 1),
  pluralPast: Word('паклили', 1),
  imperativeInformal: Word('пакли', 1),
  imperativeFormal: Word('паклите', 1),
  imperfect: [],
};

perfectVerbs.set(паклить.name.text, паклить);

export { паклить };