import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const растормошить: PerfectVerb = {
  name: Word('растормошить', 9),
  singular1stPerson: Word('растормошу', 9),
  singular2ndPerson: Word('растормошишь', 9),
  singular3rdPerson: Word('растормошит', 9),
  plural1stPerson: Word('растормошим', 9),
  plural2ndPerson: Word('растормошите', 9),
  plural3rdPerson: Word('растормошат', 9),
  masculinePast: Word('растормошил', 9),
  femininePast: Word('растормошила', 9),
  neuterPast: Word('растормошило', 9),
  pluralPast: Word('растормошили', 9),
  imperativeInformal: Word('растормоши', 9),
  imperativeFormal: Word('растормошите', 9),
  imperfect: [],
};

perfectVerbs.set(растормошить.name.text, растормошить);

export { растормошить };