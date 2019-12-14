import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const удовлетворить: PerfectVerb = {
  name: Word('удовлетворить', 10),
  singular1stPerson: Word('удовлетворю', 10),
  singular2ndPerson: Word('удовлетворишь', 10),
  singular3rdPerson: Word('удовлетворит', 10),
  plural1stPerson: Word('удовлетворим', 10),
  plural2ndPerson: Word('удовлетворите', 10),
  plural3rdPerson: Word('удовлетворят', 10),
  masculinePast: Word('удовлетворил', 10),
  femininePast: Word('удовлетворила', 10),
  neuterPast: Word('удовлетворило', 10),
  pluralPast: Word('удовлетворили', 10),
  imperativeInformal: Word('удовлетвори', 10),
  imperativeFormal: Word('удовлетворите', 10),
  imperfect: ['удовлетворять'],
};

perfectVerbs.set(удовлетворить.name.text, удовлетворить);

export { удовлетворить };