import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пробасить: PerfectVerb = {
  name: Word('пробасить', 6),
  singular1stPerson: Word('пробашу', 6),
  singular2ndPerson: Word('пробасишь', 6),
  singular3rdPerson: Word('пробасит', 6),
  plural1stPerson: Word('пробасим', 6),
  plural2ndPerson: Word('пробасите', 6),
  plural3rdPerson: Word('пробасят', 6),
  masculinePast: Word('пробасил', 6),
  femininePast: Word('пробасила', 6),
  neuterPast: Word('пробасило', 6),
  pluralPast: Word('пробасили', 6),
  imperativeInformal: Word('пробаси', 6),
  imperativeFormal: Word('пробасите', 6),
  imperfect: [],
};

perfectVerbs.set(пробасить.name.text, пробасить);

export { пробасить };