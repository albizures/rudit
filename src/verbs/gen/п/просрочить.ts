import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const просрочить: PerfectVerb = {
  name: Word('просрочить', 5),
  singular1stPerson: Word('просрочу', 5),
  singular2ndPerson: Word('просрочишь', 5),
  singular3rdPerson: Word('просрочит', 5),
  plural1stPerson: Word('просрочим', 5),
  plural2ndPerson: Word('просрочите', 5),
  plural3rdPerson: Word('просрочат', 5),
  masculinePast: Word('просрочил', 5),
  femininePast: Word('просрочила', 5),
  neuterPast: Word('просрочило', 5),
  pluralPast: Word('просрочили', 5),
  imperativeInformal: Word('просрочь', 5),
  imperativeFormal: Word('просрочьте', 5),
  imperfect: [],
};

perfectVerbs.set(просрочить.name.text, просрочить);

export { просрочить };