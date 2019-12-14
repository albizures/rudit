import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покормить: PerfectVerb = {
  name: Word('покормить', 6),
  singular1stPerson: Word('покормлю', 7),
  singular2ndPerson: Word('покормишь', 3),
  singular3rdPerson: Word('покормит', 3),
  plural1stPerson: Word('покормим', 3),
  plural2ndPerson: Word('покормите', 3),
  plural3rdPerson: Word('покормят', 3),
  masculinePast: Word('покормил', 6),
  femininePast: Word('покормила', 6),
  neuterPast: Word('покормило', 6),
  pluralPast: Word('покормили', 6),
  imperativeInformal: Word('покорми', 6),
  imperativeFormal: Word('покормите', 6),
  imperfect: [],
};

perfectVerbs.set(покормить.name.text, покормить);

export { покормить };