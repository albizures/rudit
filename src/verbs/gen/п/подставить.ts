import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подставить: PerfectVerb = {
  name: Word('подставить', 5),
  singular1stPerson: Word('подставлю', 5),
  singular2ndPerson: Word('подставишь', 5),
  singular3rdPerson: Word('подставит', 5),
  plural1stPerson: Word('подставим', 5),
  plural2ndPerson: Word('подставите', 5),
  plural3rdPerson: Word('подставят', 5),
  masculinePast: Word('подставил', 5),
  femininePast: Word('подставила', 5),
  neuterPast: Word('подставило', 5),
  pluralPast: Word('подставили', 5),
  imperativeInformal: Word('подставь', 5),
  imperativeFormal: Word('подставьте', 5),
  imperfect: [],
};

perfectVerbs.set(подставить.name.text, подставить);

export { подставить };