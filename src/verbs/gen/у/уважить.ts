import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уважить: PerfectVerb = {
  name: Word('уважить', 2),
  singular1stPerson: Word('уважу', 2),
  singular2ndPerson: Word('уважишь', 2),
  singular3rdPerson: Word('уважит', 2),
  plural1stPerson: Word('уважим', 2),
  plural2ndPerson: Word('уважите', 2),
  plural3rdPerson: Word('уважат', 2),
  masculinePast: Word('уважил', 2),
  femininePast: Word('уважила', 2),
  neuterPast: Word('уважило', 2),
  pluralPast: Word('уважили', 2),
  imperativeInformal: Word('уважь', 2),
  imperativeFormal: Word('уважьте', 2),
  imperfect: [],
};

perfectVerbs.set(уважить.name.text, уважить);

export { уважить };