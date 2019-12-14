import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const икать: PerfectVerb = {
  name: Word('икать', 0),
  singular1stPerson: Word('икаю', 0),
  singular2ndPerson: Word('икаешь', 0),
  singular3rdPerson: Word('икает', 0),
  plural1stPerson: Word('икаем', 0),
  plural2ndPerson: Word('икаете', 0),
  plural3rdPerson: Word('икают', 0),
  masculinePast: Word('икал', 0),
  femininePast: Word('икала', 0),
  neuterPast: Word('икало', 0),
  pluralPast: Word('икали', 0),
  imperativeInformal: Word('икай', 0),
  imperativeFormal: Word('икайте', 0),
  imperfect: [],
};

perfectVerbs.set(икать.name.text, икать);

export { икать };