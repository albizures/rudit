import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ударять: PerfectVerb = {
  name: Word('ударять', 4),
  singular1stPerson: Word('ударяю', 4),
  singular2ndPerson: Word('ударяешь', 4),
  singular3rdPerson: Word('ударяет', 4),
  plural1stPerson: Word('ударяем', 4),
  plural2ndPerson: Word('ударяете', 4),
  plural3rdPerson: Word('ударяют', 4),
  masculinePast: Word('ударял', 4),
  femininePast: Word('ударяла', 4),
  neuterPast: Word('ударяло', 4),
  pluralPast: Word('ударяли', 4),
  imperativeInformal: Word('ударяй', 4),
  imperativeFormal: Word('ударяйте', 4),
  imperfect: ['ударить'],
};

perfectVerbs.set(ударять.name.text, ударять);

export { ударять };