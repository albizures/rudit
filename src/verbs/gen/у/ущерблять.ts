import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ущерблять: PerfectVerb = {
  name: Word('ущерблять', 6),
  singular1stPerson: Word('ущербляю', 6),
  singular2ndPerson: Word('ущербляешь', 6),
  singular3rdPerson: Word('ущербляет', 6),
  plural1stPerson: Word('ущербляем', 6),
  plural2ndPerson: Word('ущербляете', 6),
  plural3rdPerson: Word('ущербляют', 6),
  masculinePast: Word('ущерблял', 6),
  femininePast: Word('ущербляла', 6),
  neuterPast: Word('ущербляло', 6),
  pluralPast: Word('ущербляли', 6),
  imperativeInformal: Word('ущербляй', 6),
  imperativeFormal: Word('ущербляйте', 6),
  imperfect: [],
};

perfectVerbs.set(ущерблять.name.text, ущерблять);

export { ущерблять };