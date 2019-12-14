import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const притворить: PerfectVerb = {
  name: Word('притворить', 7),
  singular1stPerson: Word('притворю', 7),
  singular2ndPerson: Word('притворишь', 7),
  singular3rdPerson: Word('притворит', 7),
  plural1stPerson: Word('притворим', 7),
  plural2ndPerson: Word('притворите', 7),
  plural3rdPerson: Word('притворят', 7),
  masculinePast: Word('притворил', 7),
  femininePast: Word('притворила', 7),
  neuterPast: Word('притворило', 7),
  pluralPast: Word('притворили', 7),
  imperativeInformal: Word('притвори', 7),
  imperativeFormal: Word('притворите', 7),
  imperfect: ['притворяться'],
};

perfectVerbs.set(притворить.name.text, притворить);

export { притворить };