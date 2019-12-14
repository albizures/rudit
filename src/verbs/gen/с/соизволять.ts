import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const соизволять: PerfectVerb = {
  name: Word('соизволять', 7),
  singular1stPerson: Word('соизволяю', 7),
  singular2ndPerson: Word('соизволяешь', 7),
  singular3rdPerson: Word('соизволяет', 7),
  plural1stPerson: Word('соизволяем', 7),
  plural2ndPerson: Word('соизволяете', 7),
  plural3rdPerson: Word('соизволяют', 7),
  masculinePast: Word('соизволял', 7),
  femininePast: Word('соизволяла', 7),
  neuterPast: Word('соизволяло', 7),
  pluralPast: Word('соизволяли', 7),
  imperativeInformal: Word('соизволяй', 7),
  imperativeFormal: Word('соизволяйте', 7),
  imperfect: [],
};

perfectVerbs.set(соизволять.name.text, соизволять);

export { соизволять };