import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выставить: PerfectVerb = {
  name: Word('выставить', 1),
  singular1stPerson: Word('выставлю', 1),
  singular2ndPerson: Word('выставишь', 1),
  singular3rdPerson: Word('выставит', 1),
  plural1stPerson: Word('выставим', 1),
  plural2ndPerson: Word('выставите', 1),
  plural3rdPerson: Word('выставят', 1),
  masculinePast: Word('выставил', 1),
  femininePast: Word('выставила', 1),
  neuterPast: Word('выставило', 1),
  pluralPast: Word('выставили', 1),
  imperativeInformal: Word('выстави//вы'ставь', 1),
  imperativeFormal: Word('выставьте', 1),
  imperfect: [],
};

perfectVerbs.set(выставить.name.text, выставить);

export { выставить };