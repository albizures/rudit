import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поменять: PerfectVerb = {
  name: Word('поменять', 5),
  singular1stPerson: Word('поменяю', 5),
  singular2ndPerson: Word('поменяешь', 5),
  singular3rdPerson: Word('поменяет', 5),
  plural1stPerson: Word('поменяем', 5),
  plural2ndPerson: Word('поменяете', 5),
  plural3rdPerson: Word('поменяют', 5),
  masculinePast: Word('поменял', 5),
  femininePast: Word('поменяла', 5),
  neuterPast: Word('поменяло', 5),
  pluralPast: Word('поменяли', 5),
  imperativeInformal: Word('поменяй', 5),
  imperativeFormal: Word('поменяйте', 5),
  imperfect: ['менять'],
};

perfectVerbs.set(поменять.name.text, поменять);

export { поменять };