import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поставить: PerfectVerb = {
  name: Word('поставить', 4),
  singular1stPerson: Word('поставлю', 4),
  singular2ndPerson: Word('поставишь', 4),
  singular3rdPerson: Word('поставит', 4),
  plural1stPerson: Word('поставим', 4),
  plural2ndPerson: Word('поставите', 4),
  plural3rdPerson: Word('поставят', 4),
  masculinePast: Word('поставил', 4),
  femininePast: Word('поставила', 4),
  neuterPast: Word('поставило', 4),
  pluralPast: Word('поставили', 4),
  imperativeInformal: Word('поставь', 4),
  imperativeFormal: Word('поставьте', 4),
  imperfect: ['ставить'],
};

perfectVerbs.set(поставить.name.text, поставить);

export { поставить };