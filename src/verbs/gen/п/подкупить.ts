import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подкупить: PerfectVerb = {
  name: Word('подкупить', 6),
  singular1stPerson: Word('подкуплю', 7),
  singular2ndPerson: Word('подкупишь', 4),
  singular3rdPerson: Word('подкупит', 4),
  plural1stPerson: Word('подкупим', 4),
  plural2ndPerson: Word('подкупите', 4),
  plural3rdPerson: Word('подкупят', 4),
  masculinePast: Word('подкупил', 6),
  femininePast: Word('подкупила', 6),
  neuterPast: Word('подкупило', 6),
  pluralPast: Word('подкупили', 6),
  imperativeInformal: Word('подкупи', 6),
  imperativeFormal: Word('подкупите', 6),
  imperfect: ['подкупать'],
};

perfectVerbs.set(подкупить.name.text, подкупить);

export { подкупить };