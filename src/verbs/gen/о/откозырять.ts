import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const откозырять: PerfectVerb = {
  name: Word('откозырять', 7),
  singular1stPerson: Word('откозыряю', 7),
  singular2ndPerson: Word('откозыряешь', 7),
  singular3rdPerson: Word('откозыряет', 7),
  plural1stPerson: Word('откозыряем', 7),
  plural2ndPerson: Word('откозыряете', 7),
  plural3rdPerson: Word('откозыряют', 7),
  masculinePast: Word('откозырял', 7),
  femininePast: Word('откозыряла', 7),
  neuterPast: Word('откозыряло', 7),
  pluralPast: Word('откозыряли', 7),
  imperativeInformal: Word('откозыряй', 7),
  imperativeFormal: Word('откозыряйте', 7),
  imperfect: [],
};

perfectVerbs.set(откозырять.name.text, откозырять);

export { откозырять };