import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскрыться: PerfectVerb = {
  name: Word('раскрыться', 5),
  singular1stPerson: Word('раскроюсь', 5),
  singular2ndPerson: Word('раскроешься', 5),
  singular3rdPerson: Word('раскроется', 5),
  plural1stPerson: Word('раскроемся', 5),
  plural2ndPerson: Word('раскроетесь', 5),
  plural3rdPerson: Word('раскроются', 5),
  masculinePast: Word('раскрылся', 5),
  femininePast: Word('раскрылась', 5),
  neuterPast: Word('раскрылось', 5),
  pluralPast: Word('раскрылись', 5),
  imperativeInformal: Word('раскройся', 5),
  imperativeFormal: Word('раскройтесь', 5),
  imperfect: [],
};

perfectVerbs.set(раскрыться.name.text, раскрыться);

export { раскрыться };