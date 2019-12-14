import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const измараться: PerfectVerb = {
  name: Word('измараться', 5),
  singular1stPerson: Word('измараюсь', 5),
  singular2ndPerson: Word('измараешься', 5),
  singular3rdPerson: Word('измарается', 5),
  plural1stPerson: Word('измараемся', 5),
  plural2ndPerson: Word('измараетесь', 5),
  plural3rdPerson: Word('измараются', 5),
  masculinePast: Word('измарался', 5),
  femininePast: Word('измаралась', 5),
  neuterPast: Word('измаралось', 5),
  pluralPast: Word('измарались', 5),
  imperativeInformal: Word('измарайся', 5),
  imperativeFormal: Word('измарайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(измараться.name.text, измараться);

export { измараться };