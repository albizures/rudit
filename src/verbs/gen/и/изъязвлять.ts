import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изъязвлять: PerfectVerb = {
  name: Word('изъязвлять', 7),
  singular1stPerson: Word('изъязвляю', 7),
  singular2ndPerson: Word('изъязвляешь', 7),
  singular3rdPerson: Word('изъязвляет', 7),
  plural1stPerson: Word('изъязвляем', 7),
  plural2ndPerson: Word('изъязвляете', 7),
  plural3rdPerson: Word('изъязвляют', 7),
  masculinePast: Word('изъязвлял', 7),
  femininePast: Word('изъязвляла', 7),
  neuterPast: Word('изъязвляло', 7),
  pluralPast: Word('изъязвляли', 7),
  imperativeInformal: Word('изъязвляй', 7),
  imperativeFormal: Word('изъязвляйте', 7),
  imperfect: [],
};

perfectVerbs.set(изъязвлять.name.text, изъязвлять);

export { изъязвлять };