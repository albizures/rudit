import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const арканить: PerfectVerb = {
  name: Word('арканить', 3),
  singular1stPerson: Word('арканю', 3),
  singular2ndPerson: Word('арканишь', 3),
  singular3rdPerson: Word('арканит', 3),
  plural1stPerson: Word('арканим', 3),
  plural2ndPerson: Word('арканите', 3),
  plural3rdPerson: Word('арканят', 3),
  masculinePast: Word('арканил', 3),
  femininePast: Word('арканила', 3),
  neuterPast: Word('арканило', 3),
  pluralPast: Word('арканили', 3),
  imperativeInformal: Word('аркань', 3),
  imperativeFormal: Word('арканьте', 3),
  imperfect: [],
};

perfectVerbs.set(арканить.name.text, арканить);

export { арканить };