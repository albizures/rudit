import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поиздеваться: PerfectVerb = {
  name: Word('поиздеваться', 7),
  singular1stPerson: Word('поиздеваюсь', 7),
  singular2ndPerson: Word('поиздеваешься', 7),
  singular3rdPerson: Word('поиздевается', 7),
  plural1stPerson: Word('поиздеваемся', 7),
  plural2ndPerson: Word('поиздеваетесь', 7),
  plural3rdPerson: Word('поиздеваются', 7),
  masculinePast: Word('поиздевался', 7),
  femininePast: Word('поиздевалась', 7),
  neuterPast: Word('поиздевалось', 7),
  pluralPast: Word('поиздевались', 7),
  imperativeInformal: Word('поиздевайся', 7),
  imperativeFormal: Word('поиздевайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(поиздеваться.name.text, поиздеваться);

export { поиздеваться };