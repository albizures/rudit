import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ваять: PerfectVerb = {
  name: Word('ваять', 2),
  singular1stPerson: Word('ваяю', 2),
  singular2ndPerson: Word('ваяешь', 2),
  singular3rdPerson: Word('ваяет', 2),
  plural1stPerson: Word('ваяем', 2),
  plural2ndPerson: Word('ваяете', 2),
  plural3rdPerson: Word('ваяют', 2),
  masculinePast: Word('ваял', 2),
  femininePast: Word('ваяла', 2),
  neuterPast: Word('ваяло', 2),
  pluralPast: Word('ваяли', 2),
  imperativeInformal: Word('ваяй', 2),
  imperativeFormal: Word('ваяйте', 2),
  imperfect: [],
};

perfectVerbs.set(ваять.name.text, ваять);

export { ваять };