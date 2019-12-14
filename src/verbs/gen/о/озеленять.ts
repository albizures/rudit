import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const озеленять: PerfectVerb = {
  name: Word('озеленять', 6),
  singular1stPerson: Word('озеленяю', 6),
  singular2ndPerson: Word('озеленяешь', 6),
  singular3rdPerson: Word('озеленяет', 6),
  plural1stPerson: Word('озеленяем', 6),
  plural2ndPerson: Word('озеленяете', 6),
  plural3rdPerson: Word('озеленяют', 6),
  masculinePast: Word('озеленял', 6),
  femininePast: Word('озеленяла', 6),
  neuterPast: Word('озеленяло', 6),
  pluralPast: Word('озеленяли', 6),
  imperativeInformal: Word('озеленяй', 6),
  imperativeFormal: Word('озеленяйте', 6),
  imperfect: [],
};

perfectVerbs.set(озеленять.name.text, озеленять);

export { озеленять };