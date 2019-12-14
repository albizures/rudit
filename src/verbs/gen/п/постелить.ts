import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const постелить: PerfectVerb = {
  name: Word('постелить', 6),
  singular1stPerson: Word('постелю', 6),
  singular2ndPerson: Word('постелешь', 4),
  singular3rdPerson: Word('постелет', 4),
  plural1stPerson: Word('постелем', 4),
  plural2ndPerson: Word('постелете', 4),
  plural3rdPerson: Word('постелют', 4),
  masculinePast: Word('постелил', 6),
  femininePast: Word('постелила', 6),
  neuterPast: Word('постелило', 6),
  pluralPast: Word('постелили', 6),
  imperativeInformal: Word('постели', 6),
  imperativeFormal: Word('постелите', 6),
  imperfect: ['стелить'],
};

perfectVerbs.set(постелить.name.text, постелить);

export { постелить };