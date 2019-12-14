import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const издеваться: PerfectVerb = {
  name: Word('издеваться', 5),
  singular1stPerson: Word('издеваюсь', 5),
  singular2ndPerson: Word('издеваешься', 5),
  singular3rdPerson: Word('издевается', 5),
  plural1stPerson: Word('издеваемся', 5),
  plural2ndPerson: Word('издеваетесь', 5),
  plural3rdPerson: Word('издеваются', 5),
  masculinePast: Word('издевался', 5),
  femininePast: Word('издевалась', 5),
  neuterPast: Word('издевалось', 5),
  pluralPast: Word('издевались', 5),
  imperativeInformal: Word('издевайся', 5),
  imperativeFormal: Word('издевайтесь', 5),
  imperfect: ['поиздеваться'],
};

perfectVerbs.set(издеваться.name.text, издеваться);

export { издеваться };