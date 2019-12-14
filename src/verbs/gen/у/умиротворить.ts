import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const умиротворить: PerfectVerb = {
  name: Word('умиротворить', 9),
  singular1stPerson: Word('умиротворю', 9),
  singular2ndPerson: Word('умиротворишь', 9),
  singular3rdPerson: Word('умиротворит', 9),
  plural1stPerson: Word('умиротворим', 9),
  plural2ndPerson: Word('умиротворите', 9),
  plural3rdPerson: Word('умиротворят', 9),
  masculinePast: Word('умиротворил', 9),
  femininePast: Word('умиротворила', 9),
  neuterPast: Word('умиротворило', 9),
  pluralPast: Word('умиротворили', 9),
  imperativeInformal: Word('умиротвори', 9),
  imperativeFormal: Word('умиротворите', 9),
  imperfect: ['умиротворять'],
};

perfectVerbs.set(умиротворить.name.text, умиротворить);

export { умиротворить };