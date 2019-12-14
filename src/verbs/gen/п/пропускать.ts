import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пропускать: PerfectVerb = {
  name: Word('пропускать', 7),
  singular1stPerson: Word('пропускаю', 7),
  singular2ndPerson: Word('пропускаешь', 7),
  singular3rdPerson: Word('пропускает', 7),
  plural1stPerson: Word('пропускаем', 7),
  plural2ndPerson: Word('пропускаете', 7),
  plural3rdPerson: Word('пропускают', 7),
  masculinePast: Word('пропускал', 7),
  femininePast: Word('пропускала', 7),
  neuterPast: Word('пропускало', 7),
  pluralPast: Word('пропускали', 7),
  imperativeInformal: Word('пропускай', 7),
  imperativeFormal: Word('пропускайте', 7),
  imperfect: ['пропустить'],
};

perfectVerbs.set(пропускать.name.text, пропускать);

export { пропускать };