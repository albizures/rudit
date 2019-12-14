import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const определять: PerfectVerb = {
  name: Word('определять', 7),
  singular1stPerson: Word('определяю', 7),
  singular2ndPerson: Word('определяешь', 7),
  singular3rdPerson: Word('определяет', 7),
  plural1stPerson: Word('определяем', 7),
  plural2ndPerson: Word('определяете', 7),
  plural3rdPerson: Word('определяют', 7),
  masculinePast: Word('определял', 7),
  femininePast: Word('определяла', 7),
  neuterPast: Word('определяло', 7),
  pluralPast: Word('определяли', 7),
  imperativeInformal: Word('определяй', 7),
  imperativeFormal: Word('определяйте', 7),
  imperfect: ['определить'],
};

perfectVerbs.set(определять.name.text, определять);

export { определять };