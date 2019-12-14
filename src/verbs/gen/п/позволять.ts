import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const позволять: PerfectVerb = {
  name: Word('позволять', 6),
  singular1stPerson: Word('позволяю', 6),
  singular2ndPerson: Word('позволяешь', 6),
  singular3rdPerson: Word('позволяет', 6),
  plural1stPerson: Word('позволяем', 6),
  plural2ndPerson: Word('позволяете', 6),
  plural3rdPerson: Word('позволяют', 6),
  masculinePast: Word('позволял', 6),
  femininePast: Word('позволяла', 6),
  neuterPast: Word('позволяло', 6),
  pluralPast: Word('позволяли', 6),
  imperativeInformal: Word('позволяй', 6),
  imperativeFormal: Word('позволяйте', 6),
  imperfect: ['позволить'],
};

perfectVerbs.set(позволять.name.text, позволять);

export { позволять };