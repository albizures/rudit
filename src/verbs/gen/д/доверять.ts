import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доверять: PerfectVerb = {
  name: Word('доверять', 5),
  singular1stPerson: Word('доверяю', 5),
  singular2ndPerson: Word('доверяешь', 5),
  singular3rdPerson: Word('доверяет', 5),
  plural1stPerson: Word('доверяем', 5),
  plural2ndPerson: Word('доверяете', 5),
  plural3rdPerson: Word('доверяют', 5),
  masculinePast: Word('доверял', 5),
  femininePast: Word('доверяла', 5),
  neuterPast: Word('доверяло', 5),
  pluralPast: Word('доверяли', 5),
  imperativeInformal: Word('доверяй', 5),
  imperativeFormal: Word('доверяйте', 5),
  imperfect: ['доверить'],
};

perfectVerbs.set(доверять.name.text, доверять);

export { доверять };