import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const гасить: PerfectVerb = {
  name: Word('гасить', 3),
  singular1stPerson: Word('гашу', 3),
  singular2ndPerson: Word('гасишь', 1),
  singular3rdPerson: Word('гасит', 1),
  plural1stPerson: Word('гасим', 1),
  plural2ndPerson: Word('гасите', 1),
  plural3rdPerson: Word('гасят', 1),
  masculinePast: Word('гасил', 3),
  femininePast: Word('гасила', 3),
  neuterPast: Word('гасило', 3),
  pluralPast: Word('гасили', 3),
  imperativeInformal: Word('гаси', 3),
  imperativeFormal: Word('гасите', 3),
  imperfect: [],
};

perfectVerbs.set(гасить.name.text, гасить);

export { гасить };