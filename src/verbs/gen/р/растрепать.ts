import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const растрепать: PerfectVerb = {
  name: Word('растрепать', 7),
  singular1stPerson: Word('растреплю', 8),
  singular2ndPerson: Word('растреплешь', 5),
  singular3rdPerson: Word('растреплет', 5),
  plural1stPerson: Word('растреплем', 5),
  plural2ndPerson: Word('растреплете', 5),
  plural3rdPerson: Word('растреплют', 5),
  masculinePast: Word('растрепал', 7),
  femininePast: Word('растрепала', 7),
  neuterPast: Word('растрепало', 7),
  pluralPast: Word('растрепали', 7),
  imperativeInformal: Word('растрепли', 8),
  imperativeFormal: Word('растреплите', 8),
  imperfect: [],
};

perfectVerbs.set(растрепать.name.text, растрепать);

export { растрепать };