import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наспиртоваться: PerfectVerb = {
  name: Word('наспиртоваться', 9),
  singular1stPerson: Word('наспиртуюсь', 7),
  singular2ndPerson: Word('наспиртуешься', 7),
  singular3rdPerson: Word('наспиртуется', 7),
  plural1stPerson: Word('наспиртуемся', 7),
  plural2ndPerson: Word('наспиртуетесь', 7),
  plural3rdPerson: Word('наспиртуются', 7),
  masculinePast: Word('наспиртовался', 9),
  femininePast: Word('наспиртовалась', 9),
  neuterPast: Word('наспиртовалось', 9),
  pluralPast: Word('наспиртовались', 9),
  imperativeInformal: Word('наспиртуйся', 7),
  imperativeFormal: Word('наспиртуйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(наспиртоваться.name.text, наспиртоваться);

export { наспиртоваться };