import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воссоединять: PerfectVerb = {
  name: Word('воссоединять', 9),
  singular1stPerson: Word('воссоединяю', 9),
  singular2ndPerson: Word('воссоединяешь', 9),
  singular3rdPerson: Word('воссоединяет', 9),
  plural1stPerson: Word('воссоединяем', 9),
  plural2ndPerson: Word('воссоединяете', 9),
  plural3rdPerson: Word('воссоединяют', 9),
  masculinePast: Word('воссоединял', 9),
  femininePast: Word('воссоединяла', 9),
  neuterPast: Word('воссоединяло', 9),
  pluralPast: Word('воссоединяли', 9),
  imperativeInformal: Word('воссоединяй', 9),
  imperativeFormal: Word('воссоединяйте', 9),
  imperfect: [],
};

perfectVerbs.set(воссоединять.name.text, воссоединять);

export { воссоединять };