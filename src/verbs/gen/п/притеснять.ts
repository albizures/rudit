import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const притеснять: PerfectVerb = {
  name: Word('притеснять', 7),
  singular1stPerson: Word('притесняю', 7),
  singular2ndPerson: Word('притесняешь', 7),
  singular3rdPerson: Word('притесняет', 7),
  plural1stPerson: Word('притесняем', 7),
  plural2ndPerson: Word('притесняете', 7),
  plural3rdPerson: Word('притесняют', 7),
  masculinePast: Word('притеснял', 7),
  femininePast: Word('притесняла', 7),
  neuterPast: Word('притесняло', 7),
  pluralPast: Word('притесняли', 7),
  imperativeInformal: Word('притесняй', 7),
  imperativeFormal: Word('притесняйте', 7),
  imperfect: [],
};

perfectVerbs.set(притеснять.name.text, притеснять);

export { притеснять };