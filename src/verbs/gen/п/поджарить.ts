import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поджарить: PerfectVerb = {
  name: Word('поджарить', 4),
  singular1stPerson: Word('поджарю', 4),
  singular2ndPerson: Word('поджаришь', 4),
  singular3rdPerson: Word('поджарит', 4),
  plural1stPerson: Word('поджарим', 4),
  plural2ndPerson: Word('поджарите', 4),
  plural3rdPerson: Word('поджарят', 4),
  masculinePast: Word('поджарил', 4),
  femininePast: Word('поджарила', 4),
  neuterPast: Word('поджарило', 4),
  pluralPast: Word('поджарили', 4),
  imperativeInformal: Word('поджарь', 4),
  imperativeFormal: Word('поджарьте', 4),
  imperfect: [],
};

perfectVerbs.set(поджарить.name.text, поджарить);

export { поджарить };