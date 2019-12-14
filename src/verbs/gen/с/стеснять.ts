import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стеснять: PerfectVerb = {
  name: Word('стеснять', 5),
  singular1stPerson: Word('стесняю', 5),
  singular2ndPerson: Word('стесняешь', 5),
  singular3rdPerson: Word('стесняет', 5),
  plural1stPerson: Word('стесняем', 5),
  plural2ndPerson: Word('стесняете', 5),
  plural3rdPerson: Word('стесняют', 5),
  masculinePast: Word('стеснял', 5),
  femininePast: Word('стесняла', 5),
  neuterPast: Word('стесняло', 5),
  pluralPast: Word('стесняли', 5),
  imperativeInformal: Word('стесняй', 5),
  imperativeFormal: Word('стесняйте', 5),
  imperfect: [],
};

perfectVerbs.set(стеснять.name.text, стеснять);

export { стеснять };