import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изжарить: PerfectVerb = {
  name: Word('изжарить', 3),
  singular1stPerson: Word('изжарю', 3),
  singular2ndPerson: Word('изжаришь', 3),
  singular3rdPerson: Word('изжарит', 3),
  plural1stPerson: Word('изжарим', 3),
  plural2ndPerson: Word('изжарите', 3),
  plural3rdPerson: Word('изжарят', 3),
  masculinePast: Word('изжарил', 3),
  femininePast: Word('изжарила', 3),
  neuterPast: Word('изжарило', 3),
  pluralPast: Word('изжарили', 3),
  imperativeInformal: Word('изжарь', 3),
  imperativeFormal: Word('изжарьте', 3),
  imperfect: [],
};

perfectVerbs.set(изжарить.name.text, изжарить);

export { изжарить };