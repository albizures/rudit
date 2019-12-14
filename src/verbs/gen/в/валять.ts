import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const валять: PerfectVerb = {
  name: Word('валять', 3),
  singular1stPerson: Word('валяю', 3),
  singular2ndPerson: Word('валяешь', 3),
  singular3rdPerson: Word('валяет', 3),
  plural1stPerson: Word('валяем', 3),
  plural2ndPerson: Word('валяете', 3),
  plural3rdPerson: Word('валяют', 3),
  masculinePast: Word('валял', 3),
  femininePast: Word('валяла', 3),
  neuterPast: Word('валяло', 3),
  pluralPast: Word('валяли', 3),
  imperativeInformal: Word('валяй', 3),
  imperativeFormal: Word('валяйте', 3),
  imperfect: ['повалять'],
};

perfectVerbs.set(валять.name.text, валять);

export { валять };