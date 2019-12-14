import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выщерблять: PerfectVerb = {
  name: Word('выщерблять', 7),
  singular1stPerson: Word('выщербляю', 7),
  singular2ndPerson: Word('выщербляешь', 7),
  singular3rdPerson: Word('выщербляет', 7),
  plural1stPerson: Word('выщербляем', 7),
  plural2ndPerson: Word('выщербляете', 7),
  plural3rdPerson: Word('выщербляют', 7),
  masculinePast: Word('выщерблял', 7),
  femininePast: Word('выщербляла', 7),
  neuterPast: Word('выщербляло', 7),
  pluralPast: Word('выщербляли', 7),
  imperativeInformal: Word('выщербляй', 7),
  imperativeFormal: Word('выщербляйте', 7),
  imperfect: [],
};

perfectVerbs.set(выщерблять.name.text, выщерблять);

export { выщерблять };