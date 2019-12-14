import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const верить: PerfectVerb = {
  name: Word('верить', 1),
  singular1stPerson: Word('верю', 1),
  singular2ndPerson: Word('веришь', 1),
  singular3rdPerson: Word('верит', 1),
  plural1stPerson: Word('верим', 1),
  plural2ndPerson: Word('верите', 1),
  plural3rdPerson: Word('верят', 1),
  masculinePast: Word('верил', 1),
  femininePast: Word('верила', 1),
  neuterPast: Word('верило', 1),
  pluralPast: Word('верили', 1),
  imperativeInformal: Word('верь', 1),
  imperativeFormal: Word('верьте', 1),
  imperfect: ['поверить'],
};

perfectVerbs.set(верить.name.text, верить);

export { верить };