import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подарить: PerfectVerb = {
  name: Word('подарить', 5),
  singular1stPerson: Word('подарю', 5),
  singular2ndPerson: Word('подаришь', 3),
  singular3rdPerson: Word('подарит', 3),
  plural1stPerson: Word('подарим', 3),
  plural2ndPerson: Word('подарите', 3),
  plural3rdPerson: Word('подарят', 3),
  masculinePast: Word('подарил', 5),
  femininePast: Word('подарила', 5),
  neuterPast: Word('подарило', 5),
  pluralPast: Word('подарили', 5),
  imperativeInformal: Word('подари', 5),
  imperativeFormal: Word('подарите', 5),
  imperfect: ['дарить'],
};

perfectVerbs.set(подарить.name.text, подарить);

export { подарить };