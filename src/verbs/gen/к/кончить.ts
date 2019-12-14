import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кончить: PerfectVerb = {
  name: Word('кончить', 1),
  singular1stPerson: Word('кончу', 1),
  singular2ndPerson: Word('кончишь', 1),
  singular3rdPerson: Word('кончит', 1),
  plural1stPerson: Word('кончим', 1),
  plural2ndPerson: Word('кончите', 1),
  plural3rdPerson: Word('кончат', 1),
  masculinePast: Word('кончил', 1),
  femininePast: Word('кончила', 1),
  neuterPast: Word('кончило', 1),
  pluralPast: Word('кончили', 1),
  imperativeInformal: Word('кончи', 1),
  imperativeFormal: Word('кончите', 1),
  imperfect: ['кончать'],
};

perfectVerbs.set(кончить.name.text, кончить);

export { кончить };