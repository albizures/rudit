import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const острословить: PerfectVerb = {
  name: Word('острословить', 7),
  singular1stPerson: Word('острословлю', 7),
  singular2ndPerson: Word('острословишь', 7),
  singular3rdPerson: Word('острословит', 7),
  plural1stPerson: Word('острословим', 7),
  plural2ndPerson: Word('острословите', 7),
  plural3rdPerson: Word('острословят', 7),
  masculinePast: Word('острословил', 7),
  femininePast: Word('острословила', 7),
  neuterPast: Word('острословило', 7),
  pluralPast: Word('острословили', 7),
  imperativeInformal: Word('острословь', 7),
  imperativeFormal: Word('острословьте', 7),
  imperfect: [],
};

perfectVerbs.set(острословить.name.text, острословить);

export { острословить };