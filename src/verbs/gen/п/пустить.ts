import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пустить: PerfectVerb = {
  name: Word('пустить', 4),
  singular1stPerson: Word('пущу', 3),
  singular2ndPerson: Word('пустишь', 1),
  singular3rdPerson: Word('пустит', 1),
  plural1stPerson: Word('пустим', 1),
  plural2ndPerson: Word('пустите', 1),
  plural3rdPerson: Word('пустят', 1),
  masculinePast: Word('пустил', 4),
  femininePast: Word('пустила', 4),
  neuterPast: Word('пустило', 4),
  pluralPast: Word('пустили', 4),
  imperativeInformal: Word('пусти', 4),
  imperativeFormal: Word('пустите', 4),
  imperfect: ['пускать'],
};

perfectVerbs.set(пустить.name.text, пустить);

export { пустить };