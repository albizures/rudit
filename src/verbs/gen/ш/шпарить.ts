import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шпарить: PerfectVerb = {
  name: Word('шпарить', 2),
  singular1stPerson: Word('шпарю', 2),
  singular2ndPerson: Word('шпаришь', 2),
  singular3rdPerson: Word('шпарит', 2),
  plural1stPerson: Word('шпарим', 2),
  plural2ndPerson: Word('шпарите', 2),
  plural3rdPerson: Word('шпарят', 2),
  masculinePast: Word('шпарил', 2),
  femininePast: Word('шпарила', 2),
  neuterPast: Word('шпарило', 2),
  pluralPast: Word('шпарили', 2),
  imperativeInformal: Word('шпарь', 2),
  imperativeFormal: Word('шпарьте', 2),
  imperfect: [],
};

perfectVerbs.set(шпарить.name.text, шпарить);

export { шпарить };