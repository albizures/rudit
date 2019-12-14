import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расторгать: PerfectVerb = {
  name: Word('расторгать', 7),
  singular1stPerson: Word('расторгаю', 7),
  singular2ndPerson: Word('расторгаешь', 7),
  singular3rdPerson: Word('расторгает', 7),
  plural1stPerson: Word('расторгаем', 7),
  plural2ndPerson: Word('расторгаете', 7),
  plural3rdPerson: Word('расторгают', 7),
  masculinePast: Word('расторгал', 7),
  femininePast: Word('расторгала', 7),
  neuterPast: Word('расторгало', 7),
  pluralPast: Word('расторгали', 7),
  imperativeInformal: Word('расторгай', 7),
  imperativeFormal: Word('расторгайте', 7),
  imperfect: ['расторгнуть'],
};

perfectVerbs.set(расторгать.name.text, расторгать);

export { расторгать };