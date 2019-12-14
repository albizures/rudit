import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const крепить: PerfectVerb = {
  name: Word('крепить', 4),
  singular1stPerson: Word('креплю', 5),
  singular2ndPerson: Word('крепишь', 4),
  singular3rdPerson: Word('крепит', 4),
  plural1stPerson: Word('крепим', 4),
  plural2ndPerson: Word('крепите', 4),
  plural3rdPerson: Word('крепят', 4),
  masculinePast: Word('крепил', 4),
  femininePast: Word('крепила', 4),
  neuterPast: Word('крепило', 4),
  pluralPast: Word('крепили', 4),
  imperativeInformal: Word('крепи', 4),
  imperativeFormal: Word('крепите', 4),
  imperfect: [],
};

perfectVerbs.set(крепить.name.text, крепить);

export { крепить };