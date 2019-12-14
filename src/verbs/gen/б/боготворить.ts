import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const боготворить: PerfectVerb = {
  name: Word('боготворить', 8),
  singular1stPerson: Word('боготворю', 8),
  singular2ndPerson: Word('боготворишь', 8),
  singular3rdPerson: Word('боготворит', 8),
  plural1stPerson: Word('боготворим', 8),
  plural2ndPerson: Word('боготворите', 8),
  plural3rdPerson: Word('боготворят', 8),
  masculinePast: Word('боготворил', 8),
  femininePast: Word('боготворила', 8),
  neuterPast: Word('боготворило', 8),
  pluralPast: Word('боготворили', 8),
  imperativeInformal: Word('боготвори', 8),
  imperativeFormal: Word('боготворите', 8),
  imperfect: [],
};

perfectVerbs.set(боготворить.name.text, боготворить);

export { боготворить };