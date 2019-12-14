import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ловить: PerfectVerb = {
  name: Word('ловить', 3),
  singular1stPerson: Word('ловлю', 4),
  singular2ndPerson: Word('ловишь', 1),
  singular3rdPerson: Word('ловит', 1),
  plural1stPerson: Word('ловим', 1),
  plural2ndPerson: Word('ловите', 1),
  plural3rdPerson: Word('ловят', 1),
  masculinePast: Word('ловил', 3),
  femininePast: Word('ловила', 3),
  neuterPast: Word('ловило', 3),
  pluralPast: Word('ловили', 3),
  imperativeInformal: Word('лови', 3),
  imperativeFormal: Word('ловите', 3),
  imperfect: ['поймать','изловить'],
};

perfectVerbs.set(ловить.name.text, ловить);

export { ловить };