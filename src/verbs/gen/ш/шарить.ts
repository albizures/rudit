import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шарить: PerfectVerb = {
  name: Word('шарить', 1),
  singular1stPerson: Word('шарю', 1),
  singular2ndPerson: Word('шаришь', 1),
  singular3rdPerson: Word('шарит', 1),
  plural1stPerson: Word('шарим', 1),
  plural2ndPerson: Word('шарите', 1),
  plural3rdPerson: Word('шарят', 1),
  masculinePast: Word('шарил', 1),
  femininePast: Word('шарила', 1),
  neuterPast: Word('шарило', 1),
  pluralPast: Word('шарили', 1),
  imperativeInformal: Word('шарь', 1),
  imperativeFormal: Word('шарьте', 1),
  imperfect: ['пошарить'],
};

perfectVerbs.set(шарить.name.text, шарить);

export { шарить };