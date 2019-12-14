import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разделять: PerfectVerb = {
  name: Word('разделять', 6),
  singular1stPerson: Word('разделяю', 6),
  singular2ndPerson: Word('разделяешь', 6),
  singular3rdPerson: Word('разделяет', 6),
  plural1stPerson: Word('разделяем', 6),
  plural2ndPerson: Word('разделяете', 6),
  plural3rdPerson: Word('разделяют', 6),
  masculinePast: Word('разделял', 6),
  femininePast: Word('разделяла', 6),
  neuterPast: Word('разделяло', 6),
  pluralPast: Word('разделяли', 6),
  imperativeInformal: Word('разделяй', 6),
  imperativeFormal: Word('разделяйте', 6),
  imperfect: ['разделить'],
};

perfectVerbs.set(разделять.name.text, разделять);

export { разделять };