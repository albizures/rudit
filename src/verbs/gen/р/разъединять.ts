import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разъединять: PerfectVerb = {
  name: Word('разъединять', 8),
  singular1stPerson: Word('разъединяю', 8),
  singular2ndPerson: Word('разъединяешь', 8),
  singular3rdPerson: Word('разъединяет', 8),
  plural1stPerson: Word('разъединяем', 8),
  plural2ndPerson: Word('разъединяете', 8),
  plural3rdPerson: Word('разъединяют', 8),
  masculinePast: Word('разъединял', 8),
  femininePast: Word('разъединяла', 8),
  neuterPast: Word('разъединяло', 8),
  pluralPast: Word('разъединяли', 8),
  imperativeInformal: Word('разъединяй', 8),
  imperativeFormal: Word('разъединяйте', 8),
  imperfect: ['разъединить'],
};

perfectVerbs.set(разъединять.name.text, разъединять);

export { разъединять };