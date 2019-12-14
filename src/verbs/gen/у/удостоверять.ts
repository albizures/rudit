import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const удостоверять: PerfectVerb = {
  name: Word('удостоверять', 9),
  singular1stPerson: Word('удостоверяю', 9),
  singular2ndPerson: Word('удостоверяешь', 9),
  singular3rdPerson: Word('удостоверяет', 9),
  plural1stPerson: Word('удостоверяем', 9),
  plural2ndPerson: Word('удостоверяете', 9),
  plural3rdPerson: Word('удостоверяют', 9),
  masculinePast: Word('удостоверял', 9),
  femininePast: Word('удостоверяла', 9),
  neuterPast: Word('удостоверяло', 9),
  pluralPast: Word('удостоверяли', 9),
  imperativeInformal: Word('удостоверяй', 9),
  imperativeFormal: Word('удостоверяйте', 9),
  imperfect: [],
};

perfectVerbs.set(удостоверять.name.text, удостоверять);

export { удостоверять };