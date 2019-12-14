import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вырубить: PerfectVerb = {
  name: Word('вырубить', 1),
  singular1stPerson: Word('вырублю', 1),
  singular2ndPerson: Word('вырубишь', 1),
  singular3rdPerson: Word('вырубит', 1),
  plural1stPerson: Word('вырубим', 1),
  plural2ndPerson: Word('вырубите', 1),
  plural3rdPerson: Word('вырубят', 1),
  masculinePast: Word('вырубил', 1),
  femininePast: Word('вырубила', 1),
  neuterPast: Word('вырубило', 1),
  pluralPast: Word('вырубили', 1),
  imperativeInformal: Word('выруби', 1),
  imperativeFormal: Word('вырубите', 1),
  imperfect: [],
};

perfectVerbs.set(вырубить.name.text, вырубить);

export { вырубить };