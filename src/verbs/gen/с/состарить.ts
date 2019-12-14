import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const состарить: PerfectVerb = {
  name: Word('состарить', 4),
  singular1stPerson: Word('состарю', 4),
  singular2ndPerson: Word('состаришь', 4),
  singular3rdPerson: Word('состарит', 4),
  plural1stPerson: Word('состарим', 4),
  plural2ndPerson: Word('состарите', 4),
  plural3rdPerson: Word('состарят', 4),
  masculinePast: Word('состарил', 4),
  femininePast: Word('состарила', 4),
  neuterPast: Word('состарило', 4),
  pluralPast: Word('состарили', 4),
  imperativeInformal: Word('состарь', 4),
  imperativeFormal: Word('состарьте', 4),
  imperfect: ['старить'],
};

perfectVerbs.set(состарить.name.text, состарить);

export { состарить };