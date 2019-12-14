import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уморить: PerfectVerb = {
  name: Word('уморить', 4),
  singular1stPerson: Word('уморю', 4),
  singular2ndPerson: Word('уморишь', 4),
  singular3rdPerson: Word('уморит', 4),
  plural1stPerson: Word('уморим', 4),
  plural2ndPerson: Word('уморите', 4),
  plural3rdPerson: Word('уморят', 4),
  masculinePast: Word('уморил', 4),
  femininePast: Word('уморила', 4),
  neuterPast: Word('уморило', 4),
  pluralPast: Word('уморили', 4),
  imperativeInformal: Word('умори', 4),
  imperativeFormal: Word('уморите', 4),
  imperfect: [],
};

perfectVerbs.set(уморить.name.text, уморить);

export { уморить };