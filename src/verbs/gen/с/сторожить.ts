import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сторожить: PerfectVerb = {
  name: Word('сторожить', 6),
  singular1stPerson: Word('сторожу', 6),
  singular2ndPerson: Word('сторожишь', 6),
  singular3rdPerson: Word('сторожит', 6),
  plural1stPerson: Word('сторожим', 6),
  plural2ndPerson: Word('сторожите', 6),
  plural3rdPerson: Word('сторожат', 6),
  masculinePast: Word('сторожил', 6),
  femininePast: Word('сторожила', 6),
  neuterPast: Word('сторожило', 6),
  pluralPast: Word('сторожили', 6),
  imperativeInformal: Word('сторожи', 6),
  imperativeFormal: Word('сторожите', 6),
  imperfect: [],
};

perfectVerbs.set(сторожить.name.text, сторожить);

export { сторожить };