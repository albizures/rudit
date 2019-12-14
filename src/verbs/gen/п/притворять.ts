import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const притворять: PerfectVerb = {
  name: Word('притворять', 7),
  singular1stPerson: Word('притворяю', 7),
  singular2ndPerson: Word('притворяешь', 7),
  singular3rdPerson: Word('притворяет', 7),
  plural1stPerson: Word('притворяем', 7),
  plural2ndPerson: Word('притворяете', 7),
  plural3rdPerson: Word('притворяют', 7),
  masculinePast: Word('притворял', 7),
  femininePast: Word('притворяла', 7),
  neuterPast: Word('притворяло', 7),
  pluralPast: Word('притворяли', 7),
  imperativeInformal: Word('притворяй', 7),
  imperativeFormal: Word('притворяйте', 7),
  imperfect: [],
};

perfectVerbs.set(притворять.name.text, притворять);

export { притворять };