import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повторять: PerfectVerb = {
  name: Word('повторять', 6),
  singular1stPerson: Word('повторяю', 6),
  singular2ndPerson: Word('повторяешь', 6),
  singular3rdPerson: Word('повторяет', 6),
  plural1stPerson: Word('повторяем', 6),
  plural2ndPerson: Word('повторяете', 6),
  plural3rdPerson: Word('повторяют', 6),
  masculinePast: Word('повторял', 6),
  femininePast: Word('повторяла', 6),
  neuterPast: Word('повторяло', 6),
  pluralPast: Word('повторяли', 6),
  imperativeInformal: Word('повторяй', 6),
  imperativeFormal: Word('повторяйте', 6),
  imperfect: ['повторить'],
};

perfectVerbs.set(повторять.name.text, повторять);

export { повторять };