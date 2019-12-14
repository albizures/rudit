import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расставить: PerfectVerb = {
  name: Word('расставить', 5),
  singular1stPerson: Word('расставлю', 5),
  singular2ndPerson: Word('расставишь', 5),
  singular3rdPerson: Word('расставит', 5),
  plural1stPerson: Word('расставим', 5),
  plural2ndPerson: Word('расставите', 5),
  plural3rdPerson: Word('расставят', 5),
  masculinePast: Word('расставил', 5),
  femininePast: Word('расставила', 5),
  neuterPast: Word('расставило', 5),
  pluralPast: Word('расставили', 5),
  imperativeInformal: Word('расставь', 5),
  imperativeFormal: Word('расставьте', 5),
  imperfect: ['расставлять'],
};

perfectVerbs.set(расставить.name.text, расставить);

export { расставить };