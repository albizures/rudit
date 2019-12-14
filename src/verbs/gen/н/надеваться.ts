import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надеваться: PerfectVerb = {
  name: Word('надеваться', 5),
  singular1stPerson: Word('надеваюсь', 5),
  singular2ndPerson: Word('надеваешься', 5),
  singular3rdPerson: Word('надевается', 5),
  plural1stPerson: Word('надеваемся', 5),
  plural2ndPerson: Word('надеваетесь', 5),
  plural3rdPerson: Word('надеваются', 5),
  masculinePast: Word('надевался', 5),
  femininePast: Word('надевалась', 5),
  neuterPast: Word('надевалось', 5),
  pluralPast: Word('надевались', 5),
  imperativeInformal: Word('надевайся', 5),
  imperativeFormal: Word('надевайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(надеваться.name.text, надеваться);

export { надеваться };