import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приварить: PerfectVerb = {
  name: Word('приварить', 6),
  singular1stPerson: Word('приварю', 6),
  singular2ndPerson: Word('приваришь', 4),
  singular3rdPerson: Word('приварит', 4),
  plural1stPerson: Word('приварим', 4),
  plural2ndPerson: Word('приварите', 4),
  plural3rdPerson: Word('приварят', 4),
  masculinePast: Word('приварил', 6),
  femininePast: Word('приварила', 6),
  neuterPast: Word('приварило', 6),
  pluralPast: Word('приварили', 6),
  imperativeInformal: Word('привари', 6),
  imperativeFormal: Word('приварите', 6),
  imperfect: [],
};

perfectVerbs.set(приварить.name.text, приварить);

export { приварить };