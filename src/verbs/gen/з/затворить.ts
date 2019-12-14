import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затворить: PerfectVerb = {
  name: Word('затворить', 6),
  singular1stPerson: Word('затворю', 6),
  singular2ndPerson: Word('затворишь', 6),
  singular3rdPerson: Word('затворит', 6),
  plural1stPerson: Word('затворим', 6),
  plural2ndPerson: Word('затворите', 6),
  plural3rdPerson: Word('затворят', 6),
  masculinePast: Word('затворил', 6),
  femininePast: Word('затворила', 6),
  neuterPast: Word('затворило', 6),
  pluralPast: Word('затворили', 6),
  imperativeInformal: Word('затвори', 6),
  imperativeFormal: Word('затворите', 6),
  imperfect: [],
};

perfectVerbs.set(затворить.name.text, затворить);

export { затворить };