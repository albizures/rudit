import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отварить: PerfectVerb = {
  name: Word('отварить', 5),
  singular1stPerson: Word('отварю', 5),
  singular2ndPerson: Word('отваришь', 3),
  singular3rdPerson: Word('отварит', 3),
  plural1stPerson: Word('отварим', 3),
  plural2ndPerson: Word('отварите', 3),
  plural3rdPerson: Word('отварят', 3),
  masculinePast: Word('отварил', 5),
  femininePast: Word('отварила', 5),
  neuterPast: Word('отварило', 5),
  pluralPast: Word('отварили', 5),
  imperativeInformal: Word('отвари', 5),
  imperativeFormal: Word('отварите', 5),
  imperfect: [],
};

perfectVerbs.set(отварить.name.text, отварить);

export { отварить };