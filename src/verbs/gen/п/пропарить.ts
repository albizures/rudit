import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пропарить: PerfectVerb = {
  name: Word('пропарить', 4),
  singular1stPerson: Word('пропарю', 4),
  singular2ndPerson: Word('пропаришь', 4),
  singular3rdPerson: Word('пропарит', 4),
  plural1stPerson: Word('пропарим', 4),
  plural2ndPerson: Word('пропарите', 4),
  plural3rdPerson: Word('пропарят', 4),
  masculinePast: Word('пропарил', 4),
  femininePast: Word('пропарила', 4),
  neuterPast: Word('пропарило', 4),
  pluralPast: Word('пропарили', 4),
  imperativeInformal: Word('пропарь', 4),
  imperativeFormal: Word('пропарьте', 4),
  imperfect: [],
};

perfectVerbs.set(пропарить.name.text, пропарить);

export { пропарить };