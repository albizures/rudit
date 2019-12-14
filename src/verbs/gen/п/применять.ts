import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const применять: PerfectVerb = {
  name: Word('применять', 6),
  singular1stPerson: Word('применяю', 6),
  singular2ndPerson: Word('применяешь', 6),
  singular3rdPerson: Word('применяет', 6),
  plural1stPerson: Word('применяем', 6),
  plural2ndPerson: Word('применяете', 6),
  plural3rdPerson: Word('применяют', 6),
  masculinePast: Word('применял', 6),
  femininePast: Word('применяла', 6),
  neuterPast: Word('применяло', 6),
  pluralPast: Word('применяли', 6),
  imperativeInformal: Word('применяй', 6),
  imperativeFormal: Word('применяйте', 6),
  imperfect: ['применить'],
};

perfectVerbs.set(применять.name.text, применять);

export { применять };