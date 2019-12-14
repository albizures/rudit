import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const присоединять: PerfectVerb = {
  name: Word('присоединять', 9),
  singular1stPerson: Word('присоединяю', 9),
  singular2ndPerson: Word('присоединяешь', 9),
  singular3rdPerson: Word('присоединяет', 9),
  plural1stPerson: Word('присоединяем', 9),
  plural2ndPerson: Word('присоединяете', 9),
  plural3rdPerson: Word('присоединяют', 9),
  masculinePast: Word('присоединял', 9),
  femininePast: Word('присоединяла', 9),
  neuterPast: Word('присоединяло', 9),
  pluralPast: Word('присоединяли', 9),
  imperativeInformal: Word('присоединяй', 9),
  imperativeFormal: Word('присоединяйте', 9),
  imperfect: [],
};

perfectVerbs.set(присоединять.name.text, присоединять);

export { присоединять };