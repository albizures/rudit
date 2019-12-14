import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const загасить: PerfectVerb = {
  name: Word('загасить', 5),
  singular1stPerson: Word('загашу', 5),
  singular2ndPerson: Word('загасишь', 3),
  singular3rdPerson: Word('загасит', 3),
  plural1stPerson: Word('загасим', 3),
  plural2ndPerson: Word('загасите', 3),
  plural3rdPerson: Word('загасят', 3),
  masculinePast: Word('загасил', 5),
  femininePast: Word('загасила', 5),
  neuterPast: Word('загасило', 5),
  pluralPast: Word('загасили', 5),
  imperativeInformal: Word('загаси', 5),
  imperativeFormal: Word('загасите', 5),
  imperfect: [],
};

perfectVerbs.set(загасить.name.text, загасить);

export { загасить };