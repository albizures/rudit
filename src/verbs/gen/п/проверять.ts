import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проверять: PerfectVerb = {
  name: Word('проверять', 6),
  singular1stPerson: Word('проверяю', 6),
  singular2ndPerson: Word('проверяешь', 6),
  singular3rdPerson: Word('проверяет', 6),
  plural1stPerson: Word('проверяем', 6),
  plural2ndPerson: Word('проверяете', 6),
  plural3rdPerson: Word('проверяют', 6),
  masculinePast: Word('проверял', 6),
  femininePast: Word('проверяла', 6),
  neuterPast: Word('проверяло', 6),
  pluralPast: Word('проверяли', 6),
  imperativeInformal: Word('проверяй', 6),
  imperativeFormal: Word('проверяйте', 6),
  imperfect: ['проверить'],
};

perfectVerbs.set(проверять.name.text, проверять);

export { проверять };