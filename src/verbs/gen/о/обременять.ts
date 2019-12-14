import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обременять: PerfectVerb = {
  name: Word('обременять', 7),
  singular1stPerson: Word('обременяю', 7),
  singular2ndPerson: Word('обременяешь', 7),
  singular3rdPerson: Word('обременяет', 7),
  plural1stPerson: Word('обременяем', 7),
  plural2ndPerson: Word('обременяете', 7),
  plural3rdPerson: Word('обременяют', 7),
  masculinePast: Word('обременял', 7),
  femininePast: Word('обременяла', 7),
  neuterPast: Word('обременяло', 7),
  pluralPast: Word('обременяли', 7),
  imperativeInformal: Word('обременяй', 7),
  imperativeFormal: Word('обременяйте', 7),
  imperfect: [],
};

perfectVerbs.set(обременять.name.text, обременять);

export { обременять };