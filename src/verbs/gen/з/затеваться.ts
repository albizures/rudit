import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затеваться: PerfectVerb = {
  name: Word('затеваться', 5),
  singular1stPerson: Word('затеваюсь', 5),
  singular2ndPerson: Word('затеваешься', 5),
  singular3rdPerson: Word('затевается', 5),
  plural1stPerson: Word('затеваемся', 5),
  plural2ndPerson: Word('затеваетесь', 5),
  plural3rdPerson: Word('затеваются', 5),
  masculinePast: Word('затевался', 5),
  femininePast: Word('затевалась', 5),
  neuterPast: Word('затевалось', 5),
  pluralPast: Word('затевались', 5),
  imperativeInformal: Word('затевайся', 5),
  imperativeFormal: Word('затевайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(затеваться.name.text, затеваться);

export { затеваться };