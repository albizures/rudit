import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const чеканить: PerfectVerb = {
  name: Word('чеканить', 3),
  singular1stPerson: Word('чеканю', 3),
  singular2ndPerson: Word('чеканишь', 3),
  singular3rdPerson: Word('чеканит', 3),
  plural1stPerson: Word('чеканим', 3),
  plural2ndPerson: Word('чеканите', 3),
  plural3rdPerson: Word('чеканят', 3),
  masculinePast: Word('чеканил', 3),
  femininePast: Word('чеканила', 3),
  neuterPast: Word('чеканило', 3),
  pluralPast: Word('чеканили', 3),
  imperativeInformal: Word('чекань', 3),
  imperativeFormal: Word('чеканьте', 3),
  imperfect: [],
};

perfectVerbs.set(чеканить.name.text, чеканить);

export { чеканить };