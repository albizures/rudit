import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const починять: PerfectVerb = {
  name: Word('починять', 5),
  singular1stPerson: Word('починяю', 5),
  singular2ndPerson: Word('починяешь', 5),
  singular3rdPerson: Word('починяет', 5),
  plural1stPerson: Word('починяем', 5),
  plural2ndPerson: Word('починяете', 5),
  plural3rdPerson: Word('починяют', 5),
  masculinePast: Word('починял', 5),
  femininePast: Word('починяла', 5),
  neuterPast: Word('починяло', 5),
  pluralPast: Word('починяли', 5),
  imperativeInformal: Word('починяй', 5),
  imperativeFormal: Word('починяйте', 5),
  imperfect: [],
};

perfectVerbs.set(починять.name.text, починять);

export { починять };