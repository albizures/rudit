import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кашеварить: PerfectVerb = {
  name: Word('кашеварить', 5),
  singular1stPerson: Word('кашеварю', 5),
  singular2ndPerson: Word('кашеваришь', 5),
  singular3rdPerson: Word('кашеварит', 5),
  plural1stPerson: Word('кашеварим', 5),
  plural2ndPerson: Word('кашеварите', 5),
  plural3rdPerson: Word('кашеварят', 5),
  masculinePast: Word('кашеварил', 5),
  femininePast: Word('кашеварила', 5),
  neuterPast: Word('кашеварило', 5),
  pluralPast: Word('кашеварили', 5),
  imperativeInformal: Word('кашеварь', 5),
  imperativeFormal: Word('кашеварьте', 5),
  imperfect: [],
};

perfectVerbs.set(кашеварить.name.text, кашеварить);

export { кашеварить };