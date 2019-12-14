import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отоварить: PerfectVerb = {
  name: Word('отоварить', 4),
  singular1stPerson: Word('отоварю', 4),
  singular2ndPerson: Word('отоваришь', 4),
  singular3rdPerson: Word('отоварит', 4),
  plural1stPerson: Word('отоварим', 4),
  plural2ndPerson: Word('отоварите', 4),
  plural3rdPerson: Word('отоварят', 4),
  masculinePast: Word('отоварил', 4),
  femininePast: Word('отоварила', 4),
  neuterPast: Word('отоварило', 4),
  pluralPast: Word('отоварили', 4),
  imperativeInformal: Word('отоварь', 4),
  imperativeFormal: Word('отоварьте', 4),
  imperfect: [],
};

perfectVerbs.set(отоварить.name.text, отоварить);

export { отоварить };