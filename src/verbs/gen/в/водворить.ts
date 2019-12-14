import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const водворить: PerfectVerb = {
  name: Word('водворить', 6),
  singular1stPerson: Word('водворю', 6),
  singular2ndPerson: Word('водворишь', 6),
  singular3rdPerson: Word('водворит', 6),
  plural1stPerson: Word('водворим', 6),
  plural2ndPerson: Word('водворите', 6),
  plural3rdPerson: Word('водворят', 6),
  masculinePast: Word('водворил', 6),
  femininePast: Word('водворила', 6),
  neuterPast: Word('водворило', 6),
  pluralPast: Word('водворили', 6),
  imperativeInformal: Word('водвори', 6),
  imperativeFormal: Word('водворите', 6),
  imperfect: [],
};

perfectVerbs.set(водворить.name.text, водворить);

export { водворить };