import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обжарить: PerfectVerb = {
  name: Word('обжарить', 3),
  singular1stPerson: Word('обжарю', 3),
  singular2ndPerson: Word('обжаришь', 3),
  singular3rdPerson: Word('обжарит', 3),
  plural1stPerson: Word('обжарим', 3),
  plural2ndPerson: Word('обжарите', 3),
  plural3rdPerson: Word('обжарят', 3),
  masculinePast: Word('обжарил', 3),
  femininePast: Word('обжарила', 3),
  neuterPast: Word('обжарило', 3),
  pluralPast: Word('обжарили', 3),
  imperativeInformal: Word('обжарь', 3),
  imperativeFormal: Word('обжарьте', 3),
  imperfect: [],
};

perfectVerbs.set(обжарить.name.text, обжарить);

export { обжарить };