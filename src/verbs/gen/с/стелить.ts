import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стелить: PerfectVerb = {
  name: Word('стелить', 4),
  singular1stPerson: Word('стелю', 4),
  singular2ndPerson: Word('стелешь', 2),
  singular3rdPerson: Word('стелет', 2),
  plural1stPerson: Word('стелем', 2),
  plural2ndPerson: Word('стелете', 2),
  plural3rdPerson: Word('стелют', 2),
  masculinePast: Word('стелил', 4),
  femininePast: Word('стелила', 4),
  neuterPast: Word('стелило', 4),
  pluralPast: Word('стелили', 4),
  imperativeInformal: Word('стели', 4),
  imperativeFormal: Word('стелите', 4),
  imperfect: ['постелить'],
};

perfectVerbs.set(стелить.name.text, стелить);

export { стелить };