import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const довершить: PerfectVerb = {
  name: Word('довершить', 6),
  singular1stPerson: Word('довершу', 6),
  singular2ndPerson: Word('довершишь', 6),
  singular3rdPerson: Word('довершит', 6),
  plural1stPerson: Word('довершим', 6),
  plural2ndPerson: Word('довершите', 6),
  plural3rdPerson: Word('довершат', 6),
  masculinePast: Word('довершил', 6),
  femininePast: Word('довершила', 6),
  neuterPast: Word('довершило', 6),
  pluralPast: Word('довершили', 6),
  imperativeInformal: Word('доверши', 6),
  imperativeFormal: Word('довершите', 6),
  imperfect: [],
};

perfectVerbs.set(довершить.name.text, довершить);

export { довершить };