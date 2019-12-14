import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перепаять: PerfectVerb = {
  name: Word('перепаять', 6),
  singular1stPerson: Word('перепаяю', 6),
  singular2ndPerson: Word('перепаяешь', 6),
  singular3rdPerson: Word('перепаяет', 6),
  plural1stPerson: Word('перепаяем', 6),
  plural2ndPerson: Word('перепаяете', 6),
  plural3rdPerson: Word('перепаяют', 6),
  masculinePast: Word('перепаял', 6),
  femininePast: Word('перепаяла', 6),
  neuterPast: Word('перепаяло', 6),
  pluralPast: Word('перепаяли', 6),
  imperativeInformal: Word('перепаяй', 6),
  imperativeFormal: Word('перепаяйте', 6),
  imperfect: [],
};

perfectVerbs.set(перепаять.name.text, перепаять);

export { перепаять };