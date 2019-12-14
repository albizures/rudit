import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const охаять: PerfectVerb = {
  name: Word('охаять', 2),
  singular1stPerson: Word('охаю', 2),
  singular2ndPerson: Word('охаешь', 2),
  singular3rdPerson: Word('охает', 2),
  plural1stPerson: Word('охаем', 2),
  plural2ndPerson: Word('охаете', 2),
  plural3rdPerson: Word('охают', 2),
  masculinePast: Word('охаял', 2),
  femininePast: Word('охаяла', 2),
  neuterPast: Word('охаяло', 2),
  pluralPast: Word('охаяли', 2),
  imperativeInformal: Word('охай', 2),
  imperativeFormal: Word('охайте', 2),
  imperfect: ['хаять'],
};

perfectVerbs.set(охаять.name.text, охаять);

export { охаять };