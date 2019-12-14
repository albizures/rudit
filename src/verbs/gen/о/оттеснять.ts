import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оттеснять: PerfectVerb = {
  name: Word('оттеснять', 6),
  singular1stPerson: Word('оттесняю', 6),
  singular2ndPerson: Word('оттесняешь', 6),
  singular3rdPerson: Word('оттесняет', 6),
  plural1stPerson: Word('оттесняем', 6),
  plural2ndPerson: Word('оттесняете', 6),
  plural3rdPerson: Word('оттесняют', 6),
  masculinePast: Word('оттеснял', 6),
  femininePast: Word('оттесняла', 6),
  neuterPast: Word('оттесняло', 6),
  pluralPast: Word('оттесняли', 6),
  imperativeInformal: Word('оттесняй', 6),
  imperativeFormal: Word('оттесняйте', 6),
  imperfect: [],
};

perfectVerbs.set(оттеснять.name.text, оттеснять);

export { оттеснять };