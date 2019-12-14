import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ставить: PerfectVerb = {
  name: Word('ставить', 2),
  singular1stPerson: Word('ставлю', 2),
  singular2ndPerson: Word('ставишь', 2),
  singular3rdPerson: Word('ставит', 2),
  plural1stPerson: Word('ставим', 2),
  plural2ndPerson: Word('ставите', 2),
  plural3rdPerson: Word('ставят', 2),
  masculinePast: Word('ставил', 2),
  femininePast: Word('ставила', 2),
  neuterPast: Word('ставило', 2),
  pluralPast: Word('ставили', 2),
  imperativeInformal: Word('ставь', 2),
  imperativeFormal: Word('ставьте', 2),
  imperfect: ['поставить'],
};

perfectVerbs.set(ставить.name.text, ставить);

export { ставить };