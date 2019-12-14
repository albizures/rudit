import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покоробить: PerfectVerb = {
  name: Word('покоробить', 5),
  singular1stPerson: Word('покороблю', 5),
  singular2ndPerson: Word('покоробишь', 5),
  singular3rdPerson: Word('покоробит', 5),
  plural1stPerson: Word('покоробим', 5),
  plural2ndPerson: Word('покоробите', 5),
  plural3rdPerson: Word('покоробят', 5),
  masculinePast: Word('покоробил', 5),
  femininePast: Word('покоробила', 5),
  neuterPast: Word('покоробило', 5),
  pluralPast: Word('покоробили', 5),
  imperativeInformal: Word('покоробь', 5),
  imperativeFormal: Word('покоробьте', 5),
  imperfect: [],
};

perfectVerbs.set(покоробить.name.text, покоробить);

export { покоробить };