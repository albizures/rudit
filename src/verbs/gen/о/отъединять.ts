import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отъединять: PerfectVerb = {
  name: Word('отъединять', 7),
  singular1stPerson: Word('отъединяю', 7),
  singular2ndPerson: Word('отъединяешь', 7),
  singular3rdPerson: Word('отъединяет', 7),
  plural1stPerson: Word('отъединяем', 7),
  plural2ndPerson: Word('отъединяете', 7),
  plural3rdPerson: Word('отъединяют', 7),
  masculinePast: Word('отъединял', 7),
  femininePast: Word('отъединяла', 7),
  neuterPast: Word('отъединяло', 7),
  pluralPast: Word('отъединяли', 7),
  imperativeInformal: Word('отъединяй', 7),
  imperativeFormal: Word('отъединяйте', 7),
  imperfect: [],
};

perfectVerbs.set(отъединять.name.text, отъединять);

export { отъединять };