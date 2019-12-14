import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const умиротворять: PerfectVerb = {
  name: Word('умиротворять', 9),
  singular1stPerson: Word('умиротворяю', 9),
  singular2ndPerson: Word('умиротворяешь', 9),
  singular3rdPerson: Word('умиротворяет', 9),
  plural1stPerson: Word('умиротворяем', 9),
  plural2ndPerson: Word('умиротворяете', 9),
  plural3rdPerson: Word('умиротворяют', 9),
  masculinePast: Word('умиротворял', 9),
  femininePast: Word('умиротворяла', 9),
  neuterPast: Word('умиротворяло', 9),
  pluralPast: Word('умиротворяли', 9),
  imperativeInformal: Word('умиротворяй', 9),
  imperativeFormal: Word('умиротворяйте', 9),
  imperfect: ['умиротворить'],
};

perfectVerbs.set(умиротворять.name.text, умиротворять);

export { умиротворять };